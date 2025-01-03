import { useDrag, useDrop } from 'react-dnd';
import ToDo from "./ToDo"
import { ITodo } from "../../types";

interface TodoItemProps {
    index: number;
    todo: ITodo;
    changeStatus: (id: string) => void;
    removeTodo: (id: string) => void;
    moveTodo: (fromIndex: number, toIndex: number) => void;
}

export default function TodoItemContainer({ index, todo, changeStatus, removeTodo, moveTodo }: TodoItemProps) {
    const [, drag] = useDrag({
        type: 'TODO',
        item: { index },
    });

    const [, drop] = useDrop({
        accept: 'TODO',
        hover: (item: { index: number }) => {
            if (item.index !== index) {
                moveTodo(item.index, index);
                item.index = index;
            }
        },
    });

    return (
        <div
            ref={(node) => drag(drop(node))}
            className="cursor-move"
        >
            <ToDo
                todo={todo}
                changeStatus={changeStatus}
                removeTodo={removeTodo}
            />
        </div>
    );
}
