import React, { useState } from "react"
import "./App.css"

function App(){
  const[count,setcount]=useState(0);

  return(
    <div className="App">
      <header>
        <h1>Counter app using state</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick={()=>setcount(0)} >Reset Counter</button>
      <button onClick={() => count >10 ? "" :setcount(count+1) } >Increase Counter</button>
      <button onClick={() => count <1 ? "": setcount(count-1) } >Decrese Counter</button>

      
    </div>
  )
}

export default App;