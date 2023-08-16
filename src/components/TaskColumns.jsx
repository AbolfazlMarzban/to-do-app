import React, { useState } from "react";
// import { useReducer } from "react";
import SingleTask from "./singleTask";

export default function TaskColumns() {
  const [todos, setTodos] = useState([])


  function newTodo() {
    var obj = {
      text: '', 
      completed: false,
      state: 'todo'
    };
    setTodos([...todos, obj])
  }

  const deleteTask =(index)=>{
    const updatedTasks = [...todos]
     updatedTasks.splice(index, 1)
    setTodos(updatedTasks)
  }

  return (
    <div className="flex mt-12 h-full pb-16">
      <div className="basis-1/3 bg-todo rounded-xl m-2.5 p-5">
        <div className="flex justify-between items-center">
          <label
            htmlFor=""
            className="font-semibold"
            style={{ color: "#6E1E29" }}
          >
            Todo
          </label>
          <span style={{ color: "#D4AFB4" }} className="text-xs">
            {todos.length} Tasks
          </span>
        </div>
        <div className="mt-5">
          {todos.map((item, i) => (
            <div  key={i}>
              <SingleTask
                index={i}
                checked={item.completed}
                text={item.text}
                state={item.state}
                deleteTask={deleteTask}

              />
            </div>
          ))}
        </div>

        <div>
          <div
            className="w-full flex items-center p-2.5 cursor-pointer"
            onClick={() => newTodo()}
          >
            <svg
              className="mr-2.5"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <rect
                x="5.14285"
                width="1.71429"
                height="12"
                rx="0.857143"
                fill="#D37A87"
              />
              <rect
                y="6.85714"
                width="1.71429"
                height="12"
                rx="0.857143"
                transform="rotate(-90 0 6.85714)"
                fill="#D37A87"
              />
            </svg>
            <span style={{ color: "#D37A87" }}>New</span>
          </div>
        </div>
      </div>
      <div className="basis-1/3 bg-doing rounded-xl m-2.5 p-5">
        <div className="flex justify-between items-center">
          <label
            htmlFor=""
            className="font-semibold"
            style={{ color: "#795B19" }}
          >
            Doing 💪
          </label>
          <span className="text-xs" style={{ color: "#DECCA4" }}>
            {todos.length} Tasks
          </span>
        </div>
        <div className="w-full flex items-center p-2.5">
          <svg
            className="mr-2.5"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <rect
              x="5.14286"
              width="1.71429"
              height="12"
              rx="0.857143"
              fill="#C2A25B"
            />
            <rect
              y="6.85714"
              width="1.71429"
              height="12"
              rx="0.857143"
              transform="rotate(-90 0 6.85714)"
              fill="#C2A25B"
            />
          </svg>
          <span style={{ color: "#C2A25B" }}>New</span>
        </div>
      </div>
      <div className="basis-1/3 bg-done rounded-xl m-2.5 p-5">
        <div className="flex justify-between items-center">
          <label
            htmlFor=""
            className="font-semibold"
            style={{ color: "#286C1A" }}
          >
            Done 🎉
          </label>
          <span className="text-xs" style={{ color: "#BCD7B6" }}>
            {todos.length} Tasks
          </span>
        </div>
      </div>
    </div>
  );
}
