import React from "react"

const AlertMessage = ({ board, guesses, handleReset }) => {
  
    if (guesses === 0) {
          const userInput = prompt(
            "Sorry, you ran out of guesses. Do you want to play again? (Please enter 'yes' or 'no')"
          );
          if (userInput && userInput.toLowerCase() === "yes") {
            handleReset();
          } 
          }
      return null;
    };
      
  export default AlertMessage;