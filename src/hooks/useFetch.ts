import useSWR from 'swr';
import api from '../services/api';


interface Project {
	id: number;
	name: string;
	modify_date: Date;
	create_date: Date;
};

export function useFetch<Data = Project, Error = any>(url: string) {
    const { data, error } = useSWR<Data>(url, async url => {
        const response = await api.get(url);
        return response.data;
    });
    //console.log(user);

    return { data, error };
};