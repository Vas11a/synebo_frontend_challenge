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
        const storedTodos = localStorage.getItem('todoListVasylPanov');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem('todoListVasylPanov', JSON.stringify(todos));
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
        const originalFromIndex = todos.findIndex(todo => todo.id === filteredTodos[fromIndex].id);
        const originalToIndex = todos.findIndex(todo => todo.id === filteredTodos[toIndex].id);
    
        if (originalFromIndex !== -1 && originalToIndex !== -1) {
            const reorderedTodos = [...todos];
            const [movedTodo] = reorderedTodos.splice(originalFromIndex, 1);
            reorderedTodos.splice(originalToIndex, 0, movedTodo);
            setTodos(reorderedTodos);
        }
    };
    
    const filters: IFilter[] = ['all', 'active', 'completed'];

    return (
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
            <div className=' pt-5 sm:pt-10'>
                <AddNewTodo addNewTodo={addNewTodo} />
                <div className='mt-5 w-full rounded-md bg-white border border-gray-200 shadow-lg'>
                    <List
                        filteredTodos={filteredTodos}
                        changeStatus={changeStatus}
                        removeTodo={removeTodo}
                        moveTodo={moveTodo}
                    />
                    <div className='flex justify-center md:justify-between flex-wrap gap-5 sm:gap-8 items-center px-3 sm:px-5 border-gray-200 text-gray-500 font-medium sm:py-2 py-4'>
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
