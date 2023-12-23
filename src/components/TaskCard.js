import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskListActions } from '../redux/taskSlice';

export default function TaskCard({ task }) {
  const [options, setOptions] = useState(false);

  const dispatch = useDispatch();

  //get random colors for bg
  const colors = ['bg-[#fffafa]', 'bg-[#fdfff5]', 'bg-[#fff5ee]', 'bg-[#f0fff0]', 'bg-[#EEEEFF]', 'bg-[#ffe4e1]', 'bg-[#f8f8ff]'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const optionsRef = useRef(null);

  const openOptions = () => {
    setOptions(true);
  };

  const closeOptions = () => {
    setOptions(false);
  };

  //to close the options
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        closeOptions();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  //delete a task
  const deleteTask =()=>{
    dispatch(taskListActions.deleteTask({taskId: task.id}))
  }
  //mark task completed
  const completeTask = (e) => {
// Check if the click target is the options icon
if (e.target.tagName.toLowerCase() !== 'svg') {
  // Only mark the task as complete if options are not open
  if (!options) {
    dispatch(taskListActions.updateTaskStatus({ taskId: task.id, status: 'completed' }));
  }
}  };

  return (
    <div onClick={completeTask} className={`relative flex flex-col gap-2 w-[140px] h-[140px] items-start p-3 rounded-md shadow-md ${randomColor} cursor-pointer hover:transform hover:scale-105 transition-all duration-300`}>
        <p className={`font-bold truncate w-full text-xl text-left ${task.status === 'completed' ? 'line-through' : ''}`}>{task.title}</p>
        <p className={`text-sm font-sans truncate w-full text-left italic  text-gray-400 ${task.status === 'completed' ? 'line-through' : ''}`}>{task.desc}</p>

      <div ref={optionsRef} onClick={openOptions} className='absolute flex flex-col items-end right-0 top-0 cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#a6a8ad" className="w-6 h-6 rounded-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
        </svg>
        {options ? (
          <div className='flex flex-col items-start z-10 bg-white cursor-pointer shadow-sm rounded-sm w-[100px]'>
           
            <p onClick={deleteTask} className='flex items-center justify-between w-full px-1 text-sm hover:bg-blue-100'>
              Delete
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
            </p>
          </div>
        ) : null}

      </div>
    </div>
  );
}
