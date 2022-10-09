import { useEffect } from "react";
import { useRef } from "react";
import { ForwaredComponent } from "./ForwaredComponent";

export const RefComponent = (props)=>{
    const myRef = useRef(null);
    const myForwardRef = useRef(null);
    useEffect(()=>{
        myForwardRef.current.focus();
    },[])
    return(
        <>
        <input type="text" ref={myRef}/>
        <ForwaredComponent ref={myForwardRef}/>
        </>
    )
}