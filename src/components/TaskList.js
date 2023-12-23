import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard'
import { useSelector } from 'react-redux';
import './TaskList.css';
export default function TaskList() {
  const tasks = useSelector(state=> state.taskList.tasks);
  
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
   // Filter tasks based on their status
   const pending = tasks
   .filter((task) => task.status === 'pending')
   .sort((a, b) => b.createdTime - a.createdTime);

 const completed = tasks
   .filter((task) => task.status === 'completed')
   .sort((a, b) => b.completedOn - a.completedOn);

    // Set the state with the filtered tasks
    setPendingTasks(pending);
    setCompletedTasks(completed);
  }, [tasks]);

  // create two list below
  return (
    <div className='fixed top-[140px] w-[90%]  md:w-[600px] lg:w-[1000px] my-10 mx-auto p-4 overflow-y-scroll h-[70vh]  custom-scrollbar'>
      <h1 className='text-start font-bold my-2'>Pending Tasks <hr /></h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full h-[300px] justify-center overflow-y-scroll overflow-x-hidden custom-scrollbar">
        {pendingTasks.map((task) => (
            <div key={task.id} className="flex justify-center">
            <TaskCard task={task} />
          </div>
        ))}
      </div>
      <h1 className='text-start font-bold my-2'>Completed Tasks <hr /></h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full h-[300px] justify-center overflow-y-scroll custom-scrollbar">
        {completedTasks.map((task) => (
            <div key={task.id} className="flex justify-center">
            <TaskCard task={task} />
          </div>
        ))}
      </div>   
    </div>
  )
}
