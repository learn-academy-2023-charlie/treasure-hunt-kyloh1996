import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"
import ResetButton from "./components/Reset"
import AlertMessage from "./components/Alert"


const App = () => {
  const initialBoard =[
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
];

const [board, setBoard] = useState(initialBoard);
const [guesses, setGuesses] = useState(5);

  const handleClick = (index) => {
    const randomIndex = Math.floor(Math.random() * 9)
    const giftIndex = Math.floor(Math.random() * 9)

    if (index === randomIndex) {
      const newBoard = [...board];
      newBoard[index] = "🎁";
      setBoard(newBoard);
      setGuesses(5);
      alert("Congratulations, you found the treasure! Click new adventure to play agin");
    } else if (index === giftIndex) {
      setBoard(initialBoard);
      setGuesses(5);
      alert("It's not your lucky day");
    } else {
      const newBoard = [...board];
      newBoard[index] = "🌲";
      setBoard(newBoard);
      setGuesses(guesses - 1);
    }
  };  
  const handleReset = () => {
    setBoard(initialBoard);
    setGuesses(5);
  };

  return (
    <>

      <h1>Treasure Hunt Game</h1>
      <p id = "counter">Guesses left: {guesses}</p>
      <Square board = {board} 
      handleClick = {handleClick}/>
      <ResetButton setBoard={setBoard}/>
      <AlertMessage board={board} guesses = {guesses} handleReset={handleReset} />   
       </>
)}

export default App;
