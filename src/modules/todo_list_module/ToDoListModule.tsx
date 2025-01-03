import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isMobile } from 'react-device-detect';
import AddNewTodo from './AddNewTodo';
import List from './List';
import Filters from './Filters';
import { useState, useEffect } from 'react';
import { IFilter, ITodo } from '../../types';

export default function ToDoListModule() {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [currentFilter, setCurrentFilter] = useState<IFilter>('all');

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);

    const addNewTodo = (todo: ITodo) => setTodos((prev) => [...prev, todo]);

    const changeStatus = (id: string) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, isActive: !todo.isActive } : todo
            )
        );
    };

    const removeTodo = (id: string) => setTodos((prev) => prev.filter((todo) => todo.id !== id));

    const clearCompleted = () => setTodos((prev) => prev.filter((todo) => todo.isActive));

    const countActiveTodos = () => {
        const activeCount = todos.filter((todo) => todo.isActive).length;
        return `${activeCount} item${activeCount === 1 ? '' : 's'} left`;
    };

    const filteredTodos = todos.filter((todo) => {
        if (currentFilter === 'completed') return !todo.isActive;
        if (currentFilter === 'active') return todo.isActive;
        return true;
    });

    const moveTodo = (fromIndex: number, toIndex: number) => {
        const updatedTodos = [...todos];
        const [movedTodo] = updatedTodos.splice(fromIndex, 1);
        updatedTodos.splice(toIndex, 0, movedTodo);
        setTodos(updatedTodos);
    };

    const filters: IFilter[] = ['all', 'active', 'completed'];

    return (
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
            <div className='pt-10'>
                <AddNewTodo addNewTodo={addNewTodo} />
                <div className='mt-5 w-full rounded-md bg-white border border-gray-200 shadow-lg'>
                    <List
                        filteredTodos={filteredTodos}
                        changeStatus={changeStatus}
                        removeTodo={removeTodo}
                        moveTodo={moveTodo}
                    />
                    <div className='flex justify-between gap-5 items-center px-5 border-gray-200 text-gray-500 font-medium pt-4 pb-4'>
                        <div>{countActiveTodos()}</div>
                        <Filters filters={filters} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
                        <span className='cursor-pointer duration-500 hover:text-black' onClick={clearCompleted}>
                            Clear Completed
                        </span>
                    </div>
                </div>
            </div>
        </DndProvider>
    );
}
