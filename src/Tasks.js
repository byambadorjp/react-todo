import React, { useState } from "react";
import { Task } from './Task'

export const Tasks = (props) => {
    
    return (
        <>
            <div>
                {
                    props.tasks.map((item, index) =>
                        <Task key={index} name={item.name} />
                    )
                }
            </div>
        </>
    );
}