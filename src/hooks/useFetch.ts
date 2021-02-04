import useSWR from 'swr';
import api from '../services/api';
// import { TaskProps } from '../components/KanbanBoard/Task'

interface Project {
    id: number;
    name: string;
    modify_date: Date;
    create_date: Date;
};

export interface TaskProps {
    name: string;
    description?: string;
    completed: false;
    priority: string;
    toDo: string;
    order: number;
    id: string;
}

export interface Todo {
    name: string;
    created_at: string;
    id: string;
    order: number;
    tasks?: [TaskProps];
}
  

export function useFetch<Data = Project, Error = any>(url: string) {
    const { data, error } = useSWR<Data>(url, async url => {
        const response = await api.get(url);
        return response.data;
    });
    //console.log(user);

    return { data, error };
};

export function LoadTodos<Data = Todo[], Error = any>(url: string, id: number) {
    const { data, error } = useSWR<Data>(url, async url => {
        const response = await api.get(url, {
            params: {
                'group': id,
            }
        });
        console.log(response.data);
        return response.data;
    });
    return { data, error };
};
/*
export function LoadTodos2<Data = Todo[], Error = any>(url: string, id: number) {
    const { data, error } = useSWR<Data>(url, async url => {
        
        return data;
    });
    return Data;
};*/