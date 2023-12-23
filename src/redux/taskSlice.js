import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const taskSlice = createSlice({
    name: "taskList",
    initialState:{
        tasks: [],

    },

    reducers:{
        addTask: (state, action) => {
            const newTask = action.payload;
            state.tasks.push(newTask);
            toast.success("Task added successfully");
        },
        deleteTask: (state, action) => {
            const taskId = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== taskId);
            toast.success("Task deleted successfully");
        }
    }

});

//export actions
export const taskListActions = taskSlice.actions;
//export reducers
export const taskListReducer = taskSlice.reducer;