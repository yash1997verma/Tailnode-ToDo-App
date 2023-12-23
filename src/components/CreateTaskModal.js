import React from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { taskListActions } from '../redux/taskSlice';
import toast from 'react-hot-toast';
export default function CreateTaskModal({setOpenModal}) {
  const dispatch  = useDispatch();
  //get form data
  const titleRef = useRef();
  const descRef = useRef();

  //close modal
  const handleClose = ()=>{
    setOpenModal(false)
  }
  //add new task
  const handleAdd =(e)=>{
    e.preventDefault();

    //get form data
    const title = titleRef.current.value;
    const desc = descRef.current.value;

    // Check if the title is not empty before adding the task
    if (title.trim() !== '') {
      const newTask = {
        id: Date.now().toString(), // Use a timestamp as a unique ID
        title: title,
        desc: desc,
        status: "pending",
        createdTime: Date.now(), 
        completedOn: null, 
      };

      // Dispatch action to change state
      dispatch(taskListActions.addTask(newTask));

      // Close the modal
      setOpenModal(false);
    } else {
      toast.error('Please enter a non-empty title');
    }
  }
 

  return (
    <div className='fixed top-0 z-10 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-500'>
      <div className="bg-blue-100  shadow-md rounded-md w-[70%] max-w-md relative">
            <svg
                    onClick={handleClose}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="#ffffff"
                    className="w-6 h-6 absolute top-[2px]  right-[2px] cursor-pointer"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
            </svg>

            <div className=" bg-[#718ffc] h-[30px] w-full rounded-t-md">
                    
            </div>


            <form className="flex flex-col p-2   ">
              <label className='my-2'>Task</label>
              <input ref={titleRef} className="p-2 font-" type="text" placeholder="Enter Task"/>

              <label className="mt-3">Description</label>
              <textarea ref={descRef} className="p-2 h-[50px]" placeholder="Describe your task" type="text"/>

                
                
              <div className="flex justify-center my-3 ">
                  <button onClick={handleAdd} className="p-2 m-2 w-[160px] shadow-md bg-white font-bold rounded-md hover:transform hover:scale-105 hover:opacity-75 transition-all duration-300">
                      {/* {editHabit.bool ? "Edit": "Add"} */}
                      Add
                  </button>
              </div>
            </form>

      </div>
   
    </div>
  )
}
