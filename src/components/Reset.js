import React from "react"

const ResetButton = ({ setBoard }) => {
    const handleReset = () => {
      setBoard([
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?"
      ])
    }
  
    return (
      <button className="reset" onClick={handleReset}>New Adventure</button>
    )
  }

  export default ResetButton