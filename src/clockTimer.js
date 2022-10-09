import React, { useEffect, useRef, useState } from 'react'
export default function ClockTimer(){
    const [firstName, setFirstName] = useState('');
    const [city, setCity] = useState('');
    const [discription, setDiscription] = useState('');
    const [obj, setObj] = useState('');
    const myRef1 = useRef(null);
    useEffect(()=>{
        console.log('in useEffect')
        myRef1.current.focus()
    },[])
    function submit(e){
        console.log('in submit')
        // e.preventDefault();
        let obj = {firstName, city, discription};
        setObj(obj);
    }
    function handleFirstname(e){
        setFirstName(e.target.value)
    }
    function handleCity(e){
        setCity(e.target.value)
    }
    function handleDiscription(e){
        setDiscription(e.target.value)
    }
    return (
        <>
        <form onSubmit={submit} className="column">
            <label>
            firstName: 
            <input type='text' name='name' ref={myRef1} placeholder='name' value={firstName} onChange={handleFirstname}/>
            </label>
            <label>
                City:
            <select value={city} onChange={handleCity}>
                <option value='Shimla'>Shimla</option>
                <option value="Bangalore">Bangalore</option>
            </select>
            </label>
            <label>
            Discription:
            <textarea value={discription} onChange={handleDiscription}/>
            </label>
            <button type='submit'>Submit</button>
        </form>
        {obj.firstName}
        {obj.city}
        {obj.discription}
        </>
        

    )
}