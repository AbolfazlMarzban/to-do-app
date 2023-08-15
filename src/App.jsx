import './app.css'
import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="w-full text-center bg-red-300 text-white">
      This was made from Scratch! Also hello world!
      <button onClick={increment}>Increment</button>
      {counter}

      <p className='text-white'>whasssup bitch</p>
      <span>sadasdadadasdasd</span>
      <a>abolfazl ahmagh</a>
    </div>

  );
};

export default App;