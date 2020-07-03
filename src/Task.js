import React from "react";

export const Task = (props) => {

    return (
        <>
            <div className='task flex justify-between'>
                <div>{props.name}</div>
                <button>X</button>
            </div>
        </>
    )
}