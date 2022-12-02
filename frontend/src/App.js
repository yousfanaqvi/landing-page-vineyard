import React from "react";
import Intro from "./Intro";
import Home from "./Home"
import {BrowserRouter as Router, Routes,Route, useLocation} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>    
    
    </div>
  );
};
export default App;