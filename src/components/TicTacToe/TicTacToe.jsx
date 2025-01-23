import "./TicTacToe.css";
import Board from "./Board";
import { useState } from "react";

const PLAYER_X = "X";
const PLAYER_O = "O";

function TicTacToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState(PLAYER_X);

    const handleClick = (cell) => {
        const newTiles = [...tiles]; // Copy tiles array
       
        if (newTiles[cell] === null) {
            newTiles[cell] = player;
            setTiles(newTiles);
            if ( player === PLAYER_X ) {
                setPlayer(PLAYER_O);
            }
            else if ( player === PLAYER_O ) {
                setPlayer(PLAYER_X);
            }
            else {
                alert( "Player turn is { ", player, " }, which is an invalid value." )
            }
        }
    };

    return (
        <div>
            <h1 className = "Title">Tic-Tac-Toe</h1>
            <Board player = { player } tiles = { tiles } onTileClick = {handleClick} />
        </div>
    )
}

export default TicTacToe;