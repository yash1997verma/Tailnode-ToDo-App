import logo from './logo.svg';
import './App.css';
import AddTask from './components/CreateTask';
import TaskList from './components/TaskList';
import store from './redux/store';
import { Provider } from 'react-redux';
import  { Toaster } from 'react-hot-toast';
function App() {
  return (
    <Provider store={store}>
      <div className="App flex flex-col items-center font-mono ">
        <h1 className='text-center font-bold text-xl '>ToDo App</h1>
        <Toaster />
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
