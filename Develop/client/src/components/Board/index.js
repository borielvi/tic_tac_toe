import React from "react";
import Square from "../Square";

const Board = ({squares, onClick}) => {
    return (
        <div className = "game-grid">
            {squares.map((square, i)=> (
            <Square key = {i} value = {square} onClick= {() => onClick(i)}/>))}
        </div>
    )
    
};

export default Board;