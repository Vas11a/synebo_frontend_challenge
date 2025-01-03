import { ITodo } from "../../types";
import TodoItemContainer from './TodoItemContainer';

interface Props {
    filteredTodos: ITodo[];
    changeStatus: (id: string) => void;
    removeTodo: (id: string) => void;
    moveTodo: (fromIndex: number, toIndex: number) => void;
}

export default function List({ filteredTodos, changeStatus, removeTodo, moveTodo }: Props) {
    return (
        <div className='flex flex-col max-h-[200px] sm:max-h-[400px] overflow-y-auto'>
            {filteredTodos.map((todo, index) => (
                <TodoItemContainer
                    key={todo.id}
                    index={index}
                    todo={todo}
                    changeStatus={changeStatus}
                    removeTodo={removeTodo}
                    moveTodo={moveTodo}
                />
            ))}
            {
                filteredTodos.length === 0 && (
                    <div className='border-b-2 px-3 sm:px-5 text-gray-500 text-center border-gray-200 pt-3 pb-3 sm:pt-4 sm:pb-4'>No todos found</div>
                )
            }
        </div>
    );
}

