import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer';

interface Post {
    id: number;
    title: string;
    body: string;
}
interface counterState {
    count: number;
    title: string;
    increment: (value: number) => void;
    decrement: (value: number) => void;
    posts: Post[];
    getPost: () => string;
}
export const useCounterStore = create<counterState>()(immer((set) => ({
    count: 10,
    title: 'uno',
    increment: (value: number) => set(state => ({//actualizar el estado
        count: state.count + value
    })),
    decrement: (value: number) => set(state => ({
        count: state.count - value
    })),
    posts: [],
    getPost: async () => { //peticiones asyncronas
        const post = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
        set((state => {
            state.posts = post
        }))
    }
})))

