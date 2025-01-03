import Header from "./components/Header"
import ToDoListModule from "./modules/todo_list_module/ToDoListModule"
function App() {
  return (
    <div className=" w-full p-5 pt-24 flex justify-center bg-gradient h-80">
      <div className=" min-w-80 w-1/2">
        <Header />
        <ToDoListModule />
      </div>
    </div>    
  )
}

export default App
