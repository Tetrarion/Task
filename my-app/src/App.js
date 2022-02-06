import React, { useState } from "react";
import './styles/style.css';
import FirstComponent from './Sections/firstsection'
import SecondComponent from "./Sections/secondsectionn";
import ThirdComponent from "./Sections/thirdsections";
import FourthComponent from "./Sections/fourthsection";

function App() {

  return (
    <div className="App">
       <hr className="rotate1"/>
        <hr className="rotate2"/>
        <hr className="rotate3"/>
        <hr className="rotate4"/>
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        <FourthComponent/>
    </div>
  );
}

export default App;
