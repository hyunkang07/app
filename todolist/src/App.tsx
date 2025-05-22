import React from 'react';
import './App.css';
import { useEffect,useState } from 'react';
import Counter from './counts';


// api



function App() {
  
  return (
    <div className="App">

      <Counter/>

      <h1>Todo list</h1>
    </div>
  );
}

export default App;
