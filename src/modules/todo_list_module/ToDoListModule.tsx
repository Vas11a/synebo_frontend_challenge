import AddNewTodo from './AddNewTodo';
import { useState } from 'react';
import { IFilters, ITodo } from '../../types';
import ToDo from './ToDo';

export default function ToDoListModule() {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [currentFilter, setCurrentFilter] = useState<IFilters>('all');

    const addNewTodo = (todo: ITodo) => {
        setTodos(prevTodos => [...prevTodos, todo]);
    };

    const changeStatus = (id: string) => {
        setTodos(prevTodos => prevTodos.map(todo => todo.id === id
            ? { ...todo, isActive: !todo.isActive }
            : todo
        ));
    };

    const removeTodo = (id: string) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const clearCompleted = () => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.isActive));
    };

    const countActiveTodos = () => {
        const activeTodos = todos.filter(todo => todo.isActive).length;
        return `${activeTodos} item${activeTodos === 1 ? '' : 's'} left`;
    };

    const filteredTodos = todos.filter(todo => {
        if (currentFilter === 'completed') return !todo.isActive;
        if (currentFilter === 'active') return todo.isActive;
        return true;
    });

    const filters: IFilters[] = ['all', 'active', 'completed'];

    return (
        <div className='pt-10'>
            <AddNewTodo addNewTodo={addNewTodo} />
            <div className='mt-5 w-full rounded-md bg-white border border-gray-200 shadow-lg'>
                <div className='flex flex-col max-h-[400px] overflow-y-auto'>
                    {filteredTodos.map(todo => (
                        <ToDo
                            key={todo.id}
                            todo={todo}
                            changeStatus={changeStatus}
                            removeTodo={removeTodo}
                        />
                    ))}
                </div>
                <div className='flex justify-between gap-5 items-center px-5 border-gray-200 text-gray-500 font-medium pt-4 pb-4'>
                    <div>{countActiveTodos()}</div>
                    <div className='flex gap-5 items-center'>
                        {filters.map(filter => (
                            <span
                                key={filter}
                                className={`cursor-pointer ${currentFilter === filter ? 'text-blue-500' : ''}`}
                                onClick={() => setCurrentFilter(filter)}
                            >
                                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </span>
                        ))}
                    </div>
                    <span className='cursor-pointer' onClick={clearCompleted}>
                        Clear Completed
                    </span>
                </div>
            </div>
        </div>
    );
}
