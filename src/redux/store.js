import { configureStore } from '@reduxjs/toolkit';
import { taskListReducer } from './taskSlice';

const store = configureStore({
    reducer:{
        taskList: taskListReducer,
    }
});

// Save the tasks to localStorage whenever the state changes
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('tasks', JSON.stringify(state.taskList.tasks));
});

export default store;