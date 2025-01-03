import Header from "./components/Header"
import ToDoListModule from "./modules/todo_list_module/ToDoListModule"
function App() {
  return (
    <div className=" w-full p-5 pt-10 sm:pt-24 flex justify-center bg-gradient h-80">
      <div className=" min-w-[300px] w-1/2">
        <Header />
        <ToDoListModule />
        <div className="text-gray-400 font-medium text-center pt-10">Drag and drop to reorder list</div>
      </div>
    </div>    
  )
}

export default App
