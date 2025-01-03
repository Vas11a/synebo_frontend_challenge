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
        <div className='flex flex-col max-h-[400px] overflow-y-auto'>
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
        </div>
    );
}

