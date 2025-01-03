import RadioButton from "../../components/radion-button/RadioButton"
import { ITodo } from "../../types";
import RemoveIcon from "../../assets/RemoveIcon"

interface Props {
    todo: ITodo;
    changeStatus: (id: string) => void
    removeTodo: (id: string) => void
}
export default function ToDo({ todo, changeStatus, removeTodo }: Props) {
  return (
    <div className='flex justify-between gap-5 items-center border-b-2 px-5  border-gray-200 pt-4 pb-4'>
        <RadioButton id={todo.id} isChecked={!todo.isActive} onChange={() => changeStatus(todo.id)} />
        <div 
            className={`flex-1 focus:outline-none text-xl ${!todo.isActive ? 'line-through text-gray-300' : ''}`}
        >{todo.title}</div>
        <div className='cursor-pointer duration-500 hover:scale-125' onClick={() => removeTodo(todo.id)}><RemoveIcon size={30} color="#78A0F2" /></div>
    </div>
  )
}
