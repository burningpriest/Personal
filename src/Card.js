import './todo.css'
export function Card({name, type, deleteHandler, completeHandler}){
    // console.log(name)
    return (
        <div className='card'>
            <span>{name}</span>
            {type==='task' && <span><button name={name} onClick={completeHandler}>complete</button></span>}
            {type==='complete' && <span><button name={name} onClick={deleteHandler}>delete</button></span>}
        </div>
    )
}