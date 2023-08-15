import './app.css'
import React, { useState } from "react";
import check from '../public/images/check.png'

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="w-full py-16 px-32">
      <div className='flex items-center'>
        <img src={check} alt="" className='w-10 h-10' />
        <h1 className='pl-3 text-4xl'>Task List</h1>
      </div>

    </div>

  );
};

export default App;