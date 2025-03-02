import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, updateFromLocal } from "./features/TasksSlice"
import EmptyList from "./components/emptyList"
import AddNew from "./components/AddNew"

function App() {
  // Define States
  const tasks = useSelector((state) => state.tasks.value)
  const dispatch = useDispatch()
  const [addNewTask, setaddNewTask] = useState(false)

  // Add Task Function
  const taskAdded = (title, description) => {
    dispatch(addTask({title: title, description: description}))
    localStorage.setItem('tasks', JSON.stringify(tasks))
    setaddNewTask(false)
  }

  // Load And Save From Localstorage if available
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')

    if(savedTasks && savedTasks.length != 0){
      dispatch(updateFromLocal(JSON.parse(savedTasks)))
    }
    
    else{
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }

  },[])

  // Save To Localstorage
  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])

  return (
      <div className="w-96 h-auto flex-col justify-center p-5 border-2 border-gray-300 rounded-4xl">
        
        {/* Add new Task Button */}
        {addNewTask ? <AddNew func={taskAdded}/> : <button onClick={() => {setaddNewTask(true)}} className="bg-white w-full p-1 rounded-4xl cursor-pointer">Add New Task</button>}

        {/* Task Lists */}
        {
        tasks.length != 0 ?
         tasks.map( 
          (task, index) => 
          {console.log('Task')} 
          ) : 
          <div>
            <hr className="mt-5 text-white mb-5"/>
            <EmptyList/>
          </div>
        }
      </div>
  )
}
export default App
