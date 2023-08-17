import React, { useState } from "react";
import { useEffect, useLayoutEffect } from "react";
import SingleTask from "./singleTask";

export default function TaskColumns() {
  const [todos, setTodos] = useState([]);
  const [doings, setDoings] = useState([]);
  const [dones, setDones] = useState([]);
  const [dragged, setDragged] = useState(null);

  useLayoutEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem('todos')))
    setDoings(JSON.parse(localStorage.getItem('doings')))
    setDones(JSON.parse(localStorage.getItem('dones')))

  }, [])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  useEffect(()=>{
    localStorage.setItem('doings', JSON.stringify(doings))
  }, [doings])
  useEffect(()=>{
    localStorage.setItem('dones', JSON.stringify(dones))
  }, [dones])


  function newTask(state) {
    switch (state) {
      case "todo":
        var length = todos.length;
        var obj = {
          id: length++,
          text: "",
          completed: false,
          state: state,
        };
        setTodos([...todos, obj]);
        break;
      case "doing":
        var length = doings.length;
        var obj = {
          id: length++,
          text: "",
          completed: false,
          state: state,
        };
        setDoings([...doings, obj]);
        break;
      case "done":
        var length = dones.length;
        var obj = {
          id: length++,
          text: "",
          completed: true,
          state: state,
        };
        setDones([...dones, obj]);
        break;
      default:
        return;
    }
  }

  const deleteTask = (state, id) => {
    if (state == "todo") {
      setTodos(todos.filter((item) => item.id !== id));
    }
    if (state == "doing") {
      setDoings(doings.filter((item) => item.id !== id));
    }
    if (state == "done") {
      setDones(dones.filter((item) => item.id !== id));
    }
  };
  const sendText = (state, text, index) => {
    var texts =  text.split(' ')
    if(texts.length > 1){
      if(state == 'todo'){
        const tasks = [...todos];
        var length = tasks.length
      for(var i=0; i < texts.length; i++){
          if(i == 0 ){
            tasks[index].text = texts[0];
          } else {
            tasks.push({
              id: length+i,
              text: texts[i],
              completed: false,
              state: state,
            })
          }
        }
                  setTodos(tasks);
                  window.location.reload()
      }
      
      if(state == 'doing'){
        const taskss = [...doings]
        var length = taskss.length
        for(var i=0; i < texts.length; i++){
          if(i == 0 ){
            taskss[index].text = texts[0];
          } else {
            taskss.push({
              id: length+i,
              text: texts[i],
              completed: false,
              state: state,
            })
          }
        }
        setDoings(taskss)
        window.location.reload()
      }
    } else {
      if(state == 'todo'){
        const tasks = [...todos];
        tasks[index].text = text;
        setTodos(tasks);
      }
      if(state == 'doing'){
        const taskss = [...doings]
        taskss[index].text = text
        setDoings(taskss)
      }
    }
   
  };
  const sendCheck = (state, value, index) =>{
    if(state == 'todo'){
      const tasks = [...todos];
      tasks[index].completed = value;
      setTodos(tasks);
    }
    if(state == 'doing'){
      const taskss = [...doings]
      taskss[index].completed = value
      setDoings(taskss)
    }
  }
  const startDrag = (item) => {
    setDragged(item);
  };

  const draggedOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const getDropped = async (state, e) => {
    e.stopPropagation();
    e.preventDefault();
    const item = dragged;
    const prevState = item.state;
    if (item) {
      item.state = state;
      if(state == "todo"){
        await setTodos([...todos, item])
      }
      if (state == "doing") {
        await setDoings([...doings, item]);
      }
      if (state == "done") {
        item.completed = true
        await setDones([...dones, item]);
      }
      await deleteTask(prevState, item.id);
    }
  };
  const dragStyle = () =>{
    const item = dragged
  }
  return (
    <div className="flex mt-12 h-full pb-16">
      <div className="basis-1/3 bg-todo rounded-xl m-2.5 p-5" onDropCapture={()=>dragStyle()} onDragOver={(e) => draggedOver(e)} onDrop={(e) => getDropped("todo", e)}>
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
        <div
          className="mt-5"
   
        >
          {todos.map((item, index) => (
            <div draggable onDragStart={() => startDrag(item)} key={item.id}>
              <SingleTask
                key={item.id}
                index={index}
                id={item.id}
                itemText={item.text}
                checked={item.completed}
                state={item.state}
                deleteTask={deleteTask}
                sendText={sendText}
                sendCheck={sendCheck}
              />
            </div>
          ))}
        </div>

        <div>
          <div
            className="w-full flex items-center p-2.5 cursor-pointer"
            onClick={() => newTask("todo")}
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
      <div
        className="basis-1/3 bg-doing rounded-xl m-2.5 p-5"
        onDragOver={(e) => draggedOver(e)}
        onDrop={(e) => getDropped("doing", e)}
      >
        <div className="flex justify-between items-center">
          <label
            htmlFor=""
            className="font-semibold"
            style={{ color: "#795B19" }}
          >
            Doing 💪
          </label>
          <span className="text-xs" style={{ color: "#DECCA4" }}>
            {doings.length} Tasks
          </span>
        </div>
        <div className="mt-5">
          {doings.map((item, index) => (
            <div draggable onDragStart={() => startDrag(item)} key={item.id}>
              <SingleTask
                key={item.id}
                index={index}
                id={item.id}
                checked={item.completed}
                state={item.state}
                deleteTask={deleteTask}
                sendText={sendText}
                itemText={item.text}
                sendCheck={sendCheck}
              />
            </div>
          ))}
        </div>
        <div>
          <div
            className="w-full flex items-center p-2.5"
            onClick={() => newTask("doing")}
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
      </div>
      <div
        className="basis-1/3 bg-done rounded-xl m-2.5 p-5"
        onDragOver={(e) => draggedOver(e)}
        onDrop={(e) => getDropped("done", e)}
      >
        <div className="flex justify-between items-center">
          <label
            htmlFor=""
            className="font-semibold"
            style={{ color: "#286C1A" }}
          >
            Done 🎉
          </label>
          <span className="text-xs" style={{ color: "#BCD7B6" }}>
            {dones.length} Tasks
          </span>
        </div>
        <div className="mt-5">
          {dones.map((item, index) => (
            <div draggable onDragStart={() => startDrag(item)} key={item.id}>
              <SingleTask
                key={item.id}
                index={index}
                id={item.id}
                checked={item.completed}
                state={item.state}
                deleteTask={deleteTask}
                sendText={sendText}
                itemText={item.text}
                sendCheck={sendCheck}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
