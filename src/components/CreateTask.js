import React from 'react'
import CreateTaskModal from './CreateTaskModal'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskListActions } from '../redux/taskSlice';
export default function CreateTask() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const openNewTaskModal = ()=>{
    setOpenModal(true);
  }
  //reset all task
  const resetTasks = ()=>{
    dispatch(taskListActions.resetTasks());
  }
  return (
    <>
      <div className='fixed   bg-blue-100 w-[90%]  md:w-[600px] lg:w-[1000px] my-10 mx-auto p-4 rounded-md shadow-md  font-mono font-bold '>
       <div onClick={resetTasks} className='absolute top-0 right-0 p-2 cursor-pointer' title='Reset'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
       </div>

          <p className=' text-xl'>🚀 Create a New Task </p>
          <button onClick={openNewTaskModal} className='flex gap-1 mx-auto cursor-pointer bg-white p-2 rounded-md shadow-md my-4 hover:transform hover:scale-105 hover:opacity-75 transition-all duration-300 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Create Task
          </button>
      </div>
      {openModal ?  <CreateTaskModal setOpenModal={setOpenModal} /> : null}
    </>


  )
}
