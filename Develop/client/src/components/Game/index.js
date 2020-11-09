import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks'
import Auth from '../../utils/auth';
import { ADD_GAME } from '../../utils/mutations';
import { calculateWinner } from "../../utils/helper";
import Board from "../Board";

const Game = () => {
    const [history , setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber , setStepNumber] = useState(0);
    const [xIsNext , setXisNext] = useState(true);
    const [gameState, setGameState] = useState({ winner: '', loser: '' })
    const [addGame, { error }] = useMutation(ADD_GAME);
    // console.log(history[stepNumber]);
    // console.log(history);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber +1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        // return if won or occupied
        if (winner || squares[i]) return;
        // select the square
        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };

    const handleReset = () => {
        window.location.reload();
    };

    setTimeout(function () {
        if (winner) {
            if (winner === 'X'){
                var loser = 'O';
            } else {
                loser = 'X';
            }
            setGameState({
                winner: winner,
                loser: loser
            });
        }
    }, 500);

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

    const saveGame = async () => {
        // save data to mongo
        try {
            var logged = Auth.loggedIn();
        } catch (e) {
            console.log(e);
            logged = false;
        }

        if (logged) {
            try {
                const { data } = await addGame({
                    variables: { ...gameState }
                });
                console.log(data);
                window.location.replace('/home');
            } catch (e) {
                console.log(e);
                console.log(error);
            }
        } else {
            alert("You need to be logged in to save games");
        }
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
                {winner && <button className='btn save-game' onClick={saveGame}>Save Game</button>}
            </div>
        </>
    )
}

export default Game;