import logo from './logo.svg';
import React, { useState, useEffect } from 'react'; 
import './App.css';

const App = () => {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  return (
    <div cvlassName = "App">
        <h1>Hi</h1>
        <button onClick= { () => setNumber(number + 1)}>{number}</button>
        <button onClick= { () => setAnumber(aNumber +1)}>{aNumber}</button>
    </div>
  );
};

export default App;
