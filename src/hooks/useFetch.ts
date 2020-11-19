import useSWR from 'swr';
import api from '../services/api';

export function useFetch<Data = any, Error = any>(url: string, user: number) {
    const { data, error } = useSWR<Data>(url, async url => {
        const response = await api.get(url);
        return response.data;
    });
    //console.log(user);

    return { data, error }
};