import React, { useState } from "react";
// import { useReducer } from "react";
import SingleTask from "./singleTask";

export default function TaskColumns() {
  const [todos, setTodos] = useState([])
  const [doings, setDoings] = useState([])
  const [dones, setDones] = useState([])
  const [dragged, setDragged] = useState(null)


  function newTodo() {
    var length = todos.length
    var obj = {
      id: length++,
      text: '', 
      completed: false,
      state: 'todo'
    };
    setTodos([...todos, obj])
  }

  const deleteTask = (id)=>{
    console.log('id', id)
    console.log('todo', todos)
    setTodos(todos.filter(item => item.id !== id))
  }
  const sendText = (text,index) => {
    const tasks = [...todos]
    tasks[index].text = text
    setTodos(tasks)
  }
  const startDrag = (item) => {
    console.log('dragged', item)
    setDragged(item)
  }
  
  const draggedOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }

  const getDropped = async (state, e) => {
    e.stopPropagation()
    e.preventDefault()
    const item = dragged
    if(item){
      console.log('state', state)
      console.log('item', item)
      item.state = state
      if(state == 'doing'){
        await setDoings([...doings, item])
      }
      await deleteTask(item.id)
      console.log('doiung', doings)
    }
  }
  return (
    <div className="flex mt-12 h-full pb-16">
      <div className="basis-1/3 bg-todo rounded-xl m-2.5 p-5" >
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
        <div className="mt-5" onDragOver={(e)=>draggedOver(e)} onDrop={(e)=>getDropped('todo', e)}>
          {todos.map((item, index) => (
            <div draggable onDragStart={()=>startDrag(item)}   key={item.id} >
              <SingleTask
                key={item.id}
                index={index}
                id={item.id}
                checked={item.completed}
                state={item.state}
                deleteTask={deleteTask}
                sendText={sendText}
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
      <div className="basis-1/3 bg-doing rounded-xl m-2.5 p-5" onDragOver={(e)=>draggedOver(e)} onDrop={(e)=>getDropped('doing', e)}>
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
        <div className="mt-5" >
          {doings.map((item, index) => (
              <div draggable onDragStart={()=>startDrag(item)}   key={item.id}>
              <SingleTask
                 key={item.id}
                 index={index}
                 id={item.id}
                 checked={item.completed}
                 state={item.state}
                 deleteTask={deleteTask}
                 sendText={sendText}
                 itemText={item.text}
           />
         </div>
          )
         )}
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
      <div className="basis-1/3 bg-done rounded-xl m-2.5 p-5" onDragOver={(e)=>draggedOver(e)} onDrop={(e)=>getDropped('done', e)}>
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
      </div>
    </div>
  );
}
