import React from "react";
export default function TaskColumns(){
    return(
        <div className="flex mt-12 h-full pb-16">
            <div className="basis-1/3 bg-todo rounded-xl m-2.5 p-5">
                <div>
                <label htmlFor="" className="font-semibold">Todo</label>
                </div>
            </div>
            <div className="basis-1/3 bg-doing rounded-xl m-2.5 p-5">
            <div>
                <label htmlFor="" className="font-semibold">Doing 💪</label>
                </div>
            </div>
            <div className="basis-1/3 bg-done rounded-xl m-2.5 p-5">
            <div>
                <label htmlFor="" className="font-semibold">Done 🎉</label>
                </div>
            </div>
        </div>
    )
}