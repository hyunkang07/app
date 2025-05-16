import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from './page/Home'
import About from "./page/Abuot";

const App: React.FC=() =>{

  return(

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
    </Routes>
  )
}

export default App;