import React, { useState } from "react";

const App = () =>{
  const [userInput, setUserInput] = useState()
  const [todos, setTodos] = useState([])
  const addData = () =>{
   setTodos([...todos,userInput])
  }
  return <div>
     <h1> Todo Lists</h1>
     <input onChange={(event)=> setUserInput(event.target.value)} type={"text"}></input>
     <button onClick={() => addData()} >Add</button>
     <ul>
      {
        todos.map((todo,index)=> <li key={index}>{todo}</li>)
      }
     </ul>
  </div>
}
export default App