import React, { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import './TicTacToe.css'
import circle_icon from '/src/assets/TicTacToe/circle.png'
import cross_icon from '/src/assets/TicTacToe/cross.png'

const TicTacToe = () => {
    let navigate = useNavigate();
    let boardStart = [
        "","","",
        "","","",
        "","",""
    ]; // Empty board

    let box0 = useRef(null);
    let box1 = useRef(null); 
    let box2 = useRef(null); 
    let box3 = useRef(null); 
    let box4 = useRef(null); 
    let box5 = useRef(null); 
    let box6 = useRef(null); 
    let box7 = useRef(null); 
    let box8 = useRef(null);
    let winnerRef = useRef(null);
    let box_array = [box0, box1, box2, box3, box4, box5, box6, box7, box8];

    let [boardState, setBoardState] = useState(boardStart); // Start with empty board
    let [count, setCount] = useState(0); // For two-player mode
    let [gameEnd, setGameEnd] = useState(false); // Locks game board until reset

    const setSpace = (event, boxNum) => {
        if (gameEnd) {
            return 0; // If game is over, do nothing
        }
        if (boardState[boxNum] === "") { // If space is empty
            if (count % 2 === 0) { // If it's player 1's turn
                event.target.innerHTML = `<img src = '${cross_icon}'>`; // Put a cross in the box
                updateBoard(boxNum, "X"); // Set the board state to reflect move
                setCount(++count); // Update turn counter
            }
            else { // If it's player 2's turn
                event.target.innerHTML = `<img src = '${circle_icon}'>`; // Put a circle in the box
                updateBoard(boxNum, "O"); // Set the board state to reflect move
                setCount(++count);  // Update turn counter
            }
            checkWin();
            // === For debugging === //
            //console.log(boardState);
            //console.log(count);
        }
        else { // If space is occupied
            console.log("Space is already occupied!"); // Send a console message
            return 0;
        }
    }

    // Return a new array that's a copy of current board state, new value
    const updateBoard = (boxNum, symbol) => {
        const newBoard = boardState.map((data, num) => {
            if (num === boxNum) {
                return symbol;
            } else {
                return data;
            }
        });
        setBoardState(newBoard);
    }

    const resetBoard = () => {
        setBoardState(boardStart);
        setGameEnd(false);
        setCount(0);
        box_array.map((e) => {
            e.current.innerHTML = "";
        })
    }

    const checkWin = () => {
        let winner = "None";

        // Check row 1
        if (boardState[0] === boardState[1] && boardState[0] === boardState[2] && boardState[0] != "") {
            winner = boardState[0];
        }
        // Check row 2
        else if (boardState[3] === boardState[4] && boardState[3] === boardState[5] && boardState[3] != "") {
            winner = boardState[3];
        }
        // Check row 3
        else if (boardState[6] === boardState[7] && boardState[6] === boardState[8] && boardState[6] != "") {
            winner = boardState[6];
        }
        // Check col 1
        else if (boardState[0] === boardState[3] && boardState[0] === boardState[6] && boardState[0] != "") {
            winner = boardState[0];
        }
        // Check col 2
        else if (boardState[1] === boardState[4] && boardState[1] === boardState[4] && boardState[1] != "") {
            winner = boardState[1];
        }
        // Check col 3
        else if (boardState[2] === boardState[5] && boardState[2] === boardState[8] && boardState[2] != "") {
            winner = boardState[2];
        }
        // Check [0, 0] to [2, 2] diagonal
        else if (boardState[0] === boardState[4] && boardState[0] === boardState[8] && boardState[0] != "") {
            winner = boardState[0];
        }
        // Check [0, 2] to [2, 0] diagonal
        else if (boardState[6] === boardState[4] && boardState[6] === boardState[2] && boardState[6] != "") {
            winner = boardState[6];
        }
        // === Debug ===  //
        //console.log(boardState);
        //console.log(winner);
        //console.log(winnerRef);
        if(winner != "None") {
            alert(`And the winner is ${winner}!`)
        }
        }

    return (
        <div className='TicTacToe'>
            <div className = 'header'>
                <button onClick = { () => {navigate("/");}}>
                    Home
                </button>
            </div>
            <h1 className = 'title'>TicTacToe</h1>
            <h3 className = 'WinnerText' ref = {winnerRef}></h3>
            <div className = 'board'>
                <div className = "row1">
                    <div className = "boxes" ref={box0} onClick = { (event) => {setSpace(event, 0)}}></div>
                    <div className = "boxes" ref={box3} onClick = { (event) => {setSpace(event, 3)}}></div>
                    <div className = "boxes" ref={box6} onClick = { (event) => {setSpace(event, 6)}}></div>
                </div>
                <div className = "row2">
                    <div className = "boxes" ref={box1} onClick = { (event) => {setSpace(event, 1)}}></div>
                    <div className = "boxes" ref={box4} onClick = { (event) => {setSpace(event, 4)}}></div>
                    <div className = "boxes" ref={box7} onClick = { (event) => {setSpace(event, 7)}}></div>
                </div>
                <div className = "row2">
                    <div className = "boxes" ref={box2} onClick = { (event) => {setSpace(event, 2)}}></div>
                    <div className = "boxes" ref={box5} onClick = { (event) => {setSpace(event, 5)}}></div>
                    <div className = "boxes" ref={box8} onClick = { (event) => {setSpace(event, 8)}}></div>
                </div>
            </div>
            <button className = 'reset' onClick = { () => {resetBoard()}}>Reset</button>
        </div>
    )
}

export default TicTacToe;