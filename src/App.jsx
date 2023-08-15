import './app.css'
import React, { useState } from "react";
import check from '../public/images/check.png'
import TaskColumns from './components/TaskColumns';

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="w-full py-16 px-32 h-screen">
      <div className='flex items-center'>
        <img src={check} alt="" className='w-10 h-10' />
        <h1 className='pl-3 text-4xl font-bold'>Task List</h1>
      </div>
      <p className='mt-14 font-medium'>Break your life to simple tasks to get things done!
      <br></br>
        Does not matter how many tasks you done, It’s important to break to small tasks and be on progress.</p>
        <TaskColumns />
    </div>

  );
};

export default App;