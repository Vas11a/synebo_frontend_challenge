
import MoonIcon from '../assets/MoonIcon'

export default function Header() {
    return (
        <div className="flex justify-between items-end">
            <div className=" text-white font-medium text-3xl sm:text-5xl">T O D O</div>
            <div className="-rotate-[30deg] duration-500 hover:rotate-0 ">
                <MoonIcon className=" w-7 h-7 sm:w-10 sm:h-10" color="white" />
            </div>
        </div>
    )
}
