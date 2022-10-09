import React from "react";
import './item.css'
// import EditIcon from '@mui/icons-material/Edit';
export function ItemDiv({item, deleteItem}){

    const handleDelete = () =>{
        deleteItem(item);
    }
    return (
        <div className="itemDiv">
            <h4>{item}</h4>
            <button>
                Edit
            </button>
            <button onClick={handleDelete}>
                Delete
            </button>
        </div>
    )
}