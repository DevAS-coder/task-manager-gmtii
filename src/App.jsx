import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateFromLocal } from "./features/TasksSlice"
import EmptyList from "./components/emptyList"
import AddNew from "./components/AddNew"

function App() {
  const tasks = useSelector((state) => state.tasks.value)
  const dispatch = useDispatch()
  const [addNewTask, setaddNewTask] = useState(false)

  const taskAdded = () => {
    setaddNewTask(false)
  }

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')

    if(savedTasks){
      dispatch(updateFromLocal(JSON.parse(savedTasks)))
    }
    
    else{
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }

  },[])

  return (
      <div className="w-96 h-auto flex-col justify-center p-5 border-2 border-gray-300 rounded-4xl">
        
        {addNewTask ? <AddNew func={taskAdded}/> : <button onClick={() => {setaddNewTask(true)}} className="bg-white w-full p-1 rounded-4xl cursor-pointer">Add New Task</button>}

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
