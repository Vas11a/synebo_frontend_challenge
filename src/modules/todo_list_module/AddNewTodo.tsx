import React from 'react'
import RadioButton from '../../components/radion-button/RadioButton'
import PlusIcon from '../../assets/PlusIcon'
import { ITodo } from '../../types'
import { v4 as uuidv4 } from 'uuid';

interface Props {
    addNewTodo: (todo: ITodo) => void
}

export default function AddNewTodo({ addNewTodo }: Props) {
    const [isChecked, setIsChecked] = React.useState(false);
    const [title, setTitle] = React.useState('');

    const handleAddTodo = () => {
        if (title.trim().length < 3) {
            return;
        }
        const todo: ITodo = {
            id: uuidv4(),
            title,
            isActive: !isChecked
        };
        addNewTodo(todo);

        setTitle('');
        setIsChecked(false);
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <div className='w-full rounded-md bg-white py-2 px-3 sm:py-3 sm:px-5 flex justify-between gap-2 sm:gap-5 items-center'>
            <RadioButton id="add-todo" isChecked={isChecked} onChange={(event) => setIsChecked(event.target.checked)} />
            <input 
                onChange={(event) => setTitle(event.target.value)} 
                value={title} 
                type="text" 
                placeholder='Create a new todo' 
                className='focus:outline-none w-full text-lg sm:text-xl' 
                onKeyDown={handleKeyDown}
            />
            <div className='cursor-pointer duration-500 hover:rotate-180' onClick={handleAddTodo}>
                <PlusIcon clasName=' w-8 h-8 sm:w-10 sm:h-10' color="#AF65EB" />
            </div>
        </div>
    );
}
