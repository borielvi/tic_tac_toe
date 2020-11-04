import React from "react";

const Square = ({ value, onClick}) => {
    const style = value ? `game-cell squares ${value}` : `game-cell squares`;
    return (
        <button className = {style} onClick = {onClick}>
            {value}
        </button>
    )
}

export default Square;