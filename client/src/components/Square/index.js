import React from "react";

const Square = ({ value, onClick}) => {
    const style = value ? `game-cell ${value}` : `game-cell`;
    return (
        <button className = {style} onClick = {onClick}>
            {value}
        </button>
    )
}

export default Square;