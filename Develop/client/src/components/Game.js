import React, {useState} from "react";
import {calculateWinner} from "helper"
import Board from "./Board";

const Game = () => {
    const [history , setHistory] = useState([9].fill(null));
    const [stepNumber , setStepNumber] = useState(0);
    const [xIsNext , setXisNext] = useState(true);
    const winner = 0;
}