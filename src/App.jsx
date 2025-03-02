import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateFromLocal } from "./features/TasksSlice"

function App() {
  const tasks = useSelector((state) => state.tasks.value)
  const dispatch = useDispatch()

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
      <div>
        {
        tasks.length != 0 ?
         tasks.map( 
          (task, index) => 
          {console.log('Task')} 
          ) : 
          console.log('nop')
        }
      </div>
  )
}
export default App
