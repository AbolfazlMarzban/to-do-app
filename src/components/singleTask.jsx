import React from "react";
import { useState, useEffect } from "react";
export default function SingleTask({
  index,
  checked,
  state,
  deleteTask,
  sendText,
  sendCheck,
  id,
  itemText
}) {    
    const [hovered, setHovered] = useState(false)
    const [text, setText] = useState(itemText)
    const [check, setCheck] = useState(checked)

     const sendTextToParent = (text) => {
        setText(text)
        sendText(state, text, index)
    }
    const sendChecktoParent = (value)=>{
      setCheck(value)
      sendCheck(state, value, index)
    }
  return (
    <div className="w-full flex items-center p-3 min-h-max mb-3 taskbox justify-between"
     onMouseEnter={() => setHovered(true)}
     onMouseLeave={()=>setHovered(false)}
     id={id}
     data-testid="task-box"
     >
        <div className="w-full">
        <input type="checkbox" className="w-4 h-4" checked={check} onChange={(event) => sendChecktoParent(event.target.checked)}/>    
        {!check && (
          <input type="text" name="taskinput" value={text} onChange={(event) => sendTextToParent(event.target.value)} className="ml-2.5" style={{'width': '90%'}}/>
        )}
        {check && (
          <span className="ml-2.5 line-through m-0">{text}</span>
        )}
        </div>
   
      {hovered && (
          <div data-testid="delete-icon" onClick={() => deleteTask(state, id)} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <rect
              x="12.1218"
              y="3.63655"
              width="1.71429"
              height="12"
              rx="0.857143"
              transform="rotate(45 12.1218 3.63655)"
              fill="#F4C5CB"
            />
            <rect
              x="3.63656"
              y="4.84873"
              width="1.71429"
              height="12"
              rx="0.857143"
              transform="rotate(-45 3.63656 4.84873)"
              fill="#F4C5CB"
            />
          </svg>
        </div>
      )}
    
    </div>
  );
}
