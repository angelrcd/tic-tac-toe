import React, { useState } from 'react';
import Square from './Square';
import calculateWinner from '../modules/calculateWinner';

export default function Board ({ xIsNext, squares, onPlay }) {

  const { winner, positions} = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = (xIsNext ? "X" : "O") + " Turn";
  }


  const handleClick = (i) => {
    if(squares[i] || calculateWinner(squares).winner) return;

    const nextSquares = squares.slice()
    nextSquares[i] = xIsNext ? "X" : "O"
    onPlay(nextSquares)
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className="board-row">
        <Square isWinner={positions.includes(0)} value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square isWinner={positions.includes(1)} value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square isWinner={positions.includes(2)} value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square isWinner={positions.includes(3)} value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square isWinner={positions.includes(4)} value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square isWinner={positions.includes(5)} value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square isWinner={positions.includes(6)} value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square isWinner={positions.includes(7)} value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square isWinner={positions.includes(8)} value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
    )
}