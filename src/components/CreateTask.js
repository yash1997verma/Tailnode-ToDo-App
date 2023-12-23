import React from 'react'
import CreateTaskModal from './CreateTaskModal'
import { useState } from 'react';
export default function CreateTask() {
  const [openModal, setOpenModal] = useState(false);

  const openNewTaskModal = ()=>{
    setOpenModal(true);
  }
  return (
    <>
      <div className='fixed   bg-blue-100 w-full sm:w-[640px] md:w-[800px] my-10 mx-auto p-4 rounded-md shadow-md  font-mono font-bold '>
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
