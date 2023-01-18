import { useState } from "react";

export default function Square( {isWinner, value, onSquareClick} ) {
  return (
    <button onClick={onSquareClick} className={`${isWinner ? 'winner': ''} square`}>{value}</button>
  )
}