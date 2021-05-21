import logo from './logo.svg';
import React, { useState, useEffect } from 'react'; 
import './App.css';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle)
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div cvlassName = "App">
        <h1>Hi</h1>
    </div>
  );
};

export default App;

