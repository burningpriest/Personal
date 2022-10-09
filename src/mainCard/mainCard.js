import React from "react";
import { ItemDiv } from "../item/item";
import './mainCard.css'
export function MainCard({title, deleteCard}){
    const [items, setItems] = React.useState([]);
    const [itemName, setItemName] = React.useState('');
    const handleAddItem = ()=>{
        let temp = items;
        temp.push(itemName);
        setItems(temp);
    }    
    const handleChangeItem = ({target})=>{
        setItemName(target.value);
    }
    const deleteItem = (value)=>{
        let temp = items.filter(item=>item!== value);
        setItems(temp);
    }
    const handleDeleteCard = () => {
        deleteCard(title)
    }
    return (
        <div className="mainCard">
            <h3>{title}</h3>
            {items.length>0 && items.map(item=>{
                return <ItemDiv key={item} item={item} deleteItem={deleteItem}/>
            })}
            <div className="addItemSection">
                <input type="text" value={itemName} onChange={handleChangeItem}/>
                <button onClick={handleAddItem}>+</button>
            </div>
            <button onClick={handleDeleteCard}>Delete</button>
        </div>
    )
}