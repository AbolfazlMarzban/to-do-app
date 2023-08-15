import React from "react";
export default function TaskColumns(){
    return(
        <div className="flex h-full mt-12">
            <div className="basis-1/3 bg-todo rounded-xl m-2.5"></div>
            <div className="basis-1/3 bg-doing rounded-xl m-2.5"></div>
            <div className="basis-1/3 bg-done rounded-xl m-2.5"></div>
        </div>
    )
}