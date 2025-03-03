import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, updateFromAPI } from "./features/TasksSlice"
import AddNew from "./components/AddNew"
import Loading from "./components/Loading"
import TaskCard from "./components/TaskCard"

function App() {
  // Define States
  const tasks = useSelector((state) => state.tasks.value)
  const dispatch = useDispatch()
  const [addNewTask, setaddNewTask] = useState(false)

  // Add Task Function
  const taskAdded = async (title, description) => {
    dispatch(addTask({ title: title, description: description, completed: false }))
    setaddNewTask(false)
    try {
      const response = await fetch('http://46.100.46.149:8069/api/task/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          description: description,
          completed: false,
        }),
      });
    
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
    
      const data = await response.json();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }

  // Load Data From API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://46.100.46.149:8069/api/task/');
        const data = await response.json();

        dispatch(updateFromAPI(data.results));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="w-88 md:w-96 h-auto flex-col justify-center p-5 border-2 border-gray-300 rounded-4xl ">

      {/* Add new Task Button */}
      {addNewTask ? 
      <div>
        <AddNew func={taskAdded} />
        <button onClick={() => {setaddNewTask(false)}} className="bg-red-600 w-full p-1 rounded-4xl text-white mt-1 mb-1 cursor-pointer">CANCEL</button>
      </div> : 
      <button onClick={() => { setaddNewTask(true) }} className="bg-white w-full p-1 rounded-4xl cursor-pointer">Add New Task</button>}

      {/* Task Lists */}
      <div className="overflow-y-scroll overflow-x-hidden max-h-75 custom-scrollbar">
        {
          tasks.length != 0 ?
            tasks.map(
              (task, index) =>
                <TaskCard key={task.id} task={task} />
            ) :
            <div>
              <hr className="mt-5 text-white mb-5" />
              <Loading />
            </div>
        }
      </div>
    </div>
  )
}
export default App
