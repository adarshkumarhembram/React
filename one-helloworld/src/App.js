import React from "react";
import './style.css';

import Button from "./Button";
const App=()=>{
    return(
    <div>
     <h1 style={{ textAlign:"center" }}>hello world!!</h1>
     <Button title="hello-world" />
     <Button title="App-store" />


     
    
    {/* <button className="button" >Hello World</button>
    <button className="button" >App Store</button>   */}
    </div>
    );
};

export default App;