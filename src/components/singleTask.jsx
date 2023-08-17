import React from "react";
import { useState, useEffect } from "react";
export default function SingleTask({
  index,
  checked,
  state,
  parentCallback,
  deleteTask,
  sendText,
  id,
  itemText
}) {    
    const [hovered, setHovered] = useState(false)
    const [text, setText] = useState(itemText)

     const sendTextToParent = (text) => {
        setText(text)
        sendText(state, text, index)
    }
  return (
    <div className="w-full flex items-center p-3 min-h-max mb-3 taskbox justify-between"
     onMouseEnter={() => setHovered(true)}
     onMouseLeave={()=>setHovered(false)}
     id={id}
     >
        <div>
        <input type="checkbox" className="w-4 h-4" value={checked} />    
        <input type="text" value={text} onChange={(event) => sendTextToParent(event.target.value)} className="ml-2.5"/>
        </div>
   
      {hovered && (
          <div onClick={() => deleteTask(state, id)} className="cursor-pointer">
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
