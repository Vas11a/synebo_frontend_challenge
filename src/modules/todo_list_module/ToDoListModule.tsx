import AddNewTodo from './AddNewTodo';
import { useState, useEffect } from 'react';
import { IFilter, ITodo } from '../../types';
import List from './List';
import Filters from './Filters';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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

    const filters: IFilter[] = ['all', 'active', 'completed'];

    const moveTodo = (fromIndex: number, toIndex: number) => {
        const reorderedTodos = [...todos];
        const [movedTodo] = reorderedTodos.splice(fromIndex, 1);
        reorderedTodos.splice(toIndex, 0, movedTodo);
        setTodos(reorderedTodos);
    };

    return (
        <DndProvider backend={HTML5Backend}>
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
