import React from "react";
import { MainCard } from "./mainCard/mainCard";
import './todoExt.css'
export function TodoExt(){
    const [cards, setCards] = React.useState([]);
    const [cardName, setCardName] = React.useState("");
    const handleAddCard = (event) =>{
        const temp = cards;
        temp.push(cardName);
        setCards(temp);
    }
    const handleCardValue = (event) =>{
        setCardName(event.target.value);
    }
    const deleteCard = (value)=>{
        let temp = cards.filter(card=>card!== value);
        setCards(temp);
    }
    return (
        <div className="main">
        <div className="cardSection">
        { cards.length>0 && cards.map(card=>{
            return (<MainCard key={card} title={card} deleteCard={deleteCard}/>)
        })}
        </div>
        <div className="addSection">
            <input type='text' value={cardName} onChange={handleCardValue} />
            <button onClick={handleAddCard}>+</button>
        </div>
        </div>
    )
}