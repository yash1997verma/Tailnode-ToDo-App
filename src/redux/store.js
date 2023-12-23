import { configureStore } from '@reduxjs/toolkit';
import { taskListReducer } from './taskSlice';

const store = configureStore({
    reducer:{
        taskList: taskListReducer,
    }
});

export default store;