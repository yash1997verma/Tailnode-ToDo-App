import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";



const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskSlice = createSlice({
    name: "taskList",
    initialState,
    reducers:{
        addTask: (state, action) => {
            const newTask = action.payload;
            state.tasks = [ newTask, ...state.tasks];
            toast.success("Task added successfully");
        },
        deleteTask: (state, action) => {
            const taskId = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== taskId.taskId);
            toast.success("Task deleted successfully");
        },
        updateTaskStatus: (state, action) => {
            const { taskId, status } = action.payload;
            state.tasks = state.tasks.map((task) =>{
                if(task.id === taskId && task.status !== 'completed'){
                    toast.success("Task marked completed");
                    return { ...task, status: status, completedOn: Date.now() };
                }else{
                    return task;
                }
            }
            );
            
        },
        resetTasks: (state) => {
            state.tasks = [];
            toast.success("All tasks reset");
        },
    }

});



//export actions
export const taskListActions = taskSlice.actions;
//export reducers
export const taskListReducer = taskSlice.reducer;