import React from "react";
import { useState } from "react";
export default function SingleTask({
  index,
  checked,
  text,
  state,
  clicked,
  hovered,
  parentCallback
}) {
    // const [input, setInput] = useState('')
    function sendText(event){
        parentCallback(event.target.value, index)
    }
  return (
    <div className="w-full flex items-center p-3 min-h-max mb-3 taskbox">
      <input type="checkbox" className="w-4 h-4" value={checked} />
      {/* {!clicked && (<span className="ml-2.5 text-xs font-semibold">{text}</span>)} */}
      {/* {clicked && (<input type="text" name="" id="" value={text} />)} */}      
        <input type="text" onChange={(event) => sendText(event)} className="ml-2.5"/>
      {hovered && (
          <div>
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
