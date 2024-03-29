import useSWR from "swr";
import { Todo } from "../../../types";

export const fetcher = async (path: string) => {
    try {
        const res = await fetch("http://localhost:3006" + path);
        return res.json();
    } catch (error) {
        alert(error);
    }
};

export const useTodoList = () => useSWR<Todo[]>("/todos", fetcher);