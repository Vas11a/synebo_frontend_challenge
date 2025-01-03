export type ITodo = {
    id: string;
    title: string;
    isActive: boolean;
}

export type IFilter = 'all' | 'active' | 'completed';