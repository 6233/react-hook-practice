import logo from './logo.svg';
import React, { Component, useState } from 'react'; 
import './App.css';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    console.log(event.target);
  }
  return {value, onChange};
}


const App = () => {
  const name = useInput("Mr.");
  return (
    <div cvlassName = "App">
        <h1>Hello</h1>
        <input placeholder="Name" {...name} />
    </div>
  );
}

export default App;
