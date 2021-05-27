import logo from './logo.svg';
import React, { useState, useEffect, useRef } from 'react'; 
import './App.css';

const useConfirm = (message = "", callback) => {
  if (typeof callback !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    }
  };
  return confirmAction;
}


const App = () => {
  const deleteWorld = () => console.log("DeletingWolrd");
  const aborted = () => console.log("aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, aborted);
  return (
    <div cvlassName = "App">
        <botton onClick = {confirmDelete} >delete the world</botton>
    </div>
  );
};

export default App;

