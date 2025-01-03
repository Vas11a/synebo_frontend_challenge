import AddNewTodo from './AddNewTodo';
import { useState } from 'react';
import { ITodo } from '../../types';
import ToDo from './ToDo';

export default function ToDoListModule() {

    const [todos, setTodos] = useState<ITodo[]>([]);
    

    const addNewTodo = (todo: ITodo) => {
        setTodos([...todos, todo]);
    }

    const changeStatus = (id: string) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isActive: !todo.isActive
                }
            }
            return todo;
        }))
    }

    const removeTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div className='pt-10'>
            <AddNewTodo addNewTodo={addNewTodo} />

            <div className='mt-5 w-full rounded-md bg-white border border-gray-200 shadow-lg'>
                <div className='flex flex-col'>
                    {
                        todos.map((todo) =>
                            <ToDo
                                key={todo.id}
                                todo={todo}
                                changeStatus={changeStatus}
                                removeTodo={removeTodo} />
                        )
                    }
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
