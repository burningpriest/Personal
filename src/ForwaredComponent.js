import React from 'react'
export const ForwaredComponent = React.forwardRef((props,ref)=>{
    return(
        <input type='text' ref={ref}/>
    )
})