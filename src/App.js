import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="w-full text-center">
      This was made from Scratch! Also hello world!
      <button onClick={increment}>Increment</button>
      {counter}

      <p>whasssup bitch</p>
      <span>sadasdadadasdasd</span>
    </div>
  );
};

export default App;