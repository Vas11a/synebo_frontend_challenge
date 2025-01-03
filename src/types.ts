export type ITodo = {
    id: string;
    title: string;
    isActive: boolean;
}

export type IFilters = 'all' | 'active' | 'completed';