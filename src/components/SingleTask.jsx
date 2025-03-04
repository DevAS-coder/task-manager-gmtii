import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Title from "./Title";
import Description from "./Description";
import CompeleteCheck from "./CompeleteCheck";
import Delete from "./Delete";

function SingleTask() {
    const { taskId } = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDone, setisDone] = useState(null)
    const navigate = useNavigate()

    const onCheckChange = () => {
        setisDone(!isDone)
    }

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await fetch(`http://46.100.46.149:8069/api/task/${taskId}/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch task");
                }
                const data = await response.json();
                setTask(data);
                setisDone(data.completed)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTask();
    }, [taskId]);

    if (loading) return <p className="text-white">Loading ...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!task) return <p className="text-white">No Match Task Found!</p>;

    return (
        <div className="text-white">
            <p className="ml-2 cursor-pointer" onClick={() => {navigate('/')}}><i className="fa-solid fa-arrow-left"></i><span className="ml-2">Back</span></p>
            <div className='text-white border-2 border-white m-2 p-3 rounded-xl flex justify-between'>

                <div className='w-52 break-words'>
                    <Title task={task} completed={isDone} />

                    <div className='bg-gray-400 h-px w-52 my-2'></div>

                    <Description task={task} />
                </div>
                <div className='flex flex-col justify-evenly items-center ml-5'>
                    <CompeleteCheck task={task} completed={isDone} func={onCheckChange} />
                    <Delete id={task.id} />
                </div>
            </div>

        </div>
    );
}

export default SingleTask;
