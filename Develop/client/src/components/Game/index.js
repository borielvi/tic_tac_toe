import React, {useState} from "react";
import { Link } from 'react-router-dom';
import {calculateWinner} from "../../utils/helper";
import Board from "../Board";

const Game = () => {
    const [history , setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber , setStepNumber] = useState(0);
    const [xIsNext , setXisNext] = useState(true);
    // console.log(history[stepNumber]);
    // console.log(history)
    const winner = calculateWinner(history[stepNumber]);
    // const winner = '';
    const xO = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber +1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        // return if won or occupied
        if (winner || squares[i]) return;
        //select the square
        squares[i] =xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };

    const handleReset = () => {
        window.location.reload();
    };

    /*
    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0)
    };
    
    const renderMoves = () => {
        history.map((_step, move) => {
            const destinaton = move ? `Go to move #${move}` : "Go to Start";
            return (
                <li key = {move}>
                    <button onClick= {()=> jumpTo (move)}>{destinaton}</button>
                </li>
            )
        })
    }
    */

    if (winner) {
        // save data to mongo
        console.log("test");
    }

    return (
        <>
            <div className="container">
                <h1 className="title">Tic <span>Tac</span> Toe <Link to='/login' className='btn login-btn'>Login</Link> </h1>
                <div className="status-action">
                    <h3 className="status">{winner ? "Winner: " + winner : "Next Player: " + xO} </h3>
                    <div className="reset" onClick= {handleReset} >Reset</div>
                </div>
                
                <Board squares = {history[stepNumber]} onClick = {handleClick} />                
            </div>
        </>
    )
}

export default Game;