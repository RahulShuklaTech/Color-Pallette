import Rectangle from './Rectangle.js'
import { useState } from 'react';
import './App.css';

function App() {
  let [color,setColor] =  useState("blue");
  function generateRanodomHex() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    setColor(color = "#"+randomColor);
  }
  let divs = [1,0.8,0.6,0.5,0.3,0.1];
  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Color Palette Generator</h1>
        
      </header>
      <button onClick = {generateRanodomHex}>Generate Color</button>
      <div className = "cards">
      {
        divs.map( item=> <Rectangle color = {color} opacity = {item}/>  )
      }      
      
      </div>
    </div>
  );
}

export default App;
