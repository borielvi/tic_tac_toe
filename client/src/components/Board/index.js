import React from "react";
import Square from "../Square";

const Board = ({squares, onClick}) => {
    return (
        <div className="container">
            <h1 className="title">Tic <span>Tac</span> Toe</h1>
            <div className="status-action">
                <div className="status">× is next</div>
                <div className="reset">Reset</div>
            </div>
            <div className = "game-grid">
                {squares.map((square, i)=> (
                <Square key = {i} value = {square} onClick= {() => onClick(i)}/>))}
            </div> 
        </div>
    )
    
};

export default Board;