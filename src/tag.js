import React, { useState } from 'react'
export default function Tag({name, removeTag}){
    function handleClick(){
        removeTag(name);
    }
    return (
        <div>
        {name}
        <button onClick={handleClick}>x</button>
        </div>

    )
}