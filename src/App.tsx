import React from 'react';
import './App.css';
import Button from './components/Button';
import ButtonStyle from './components/ButtonStyle';
import DataFetch from './components/DataFetch';
import Post from './components/Post';

const btnStyles = { backgroundColor: "green", padding: "0.5rem" }

function App() {
  return (
    <div className="App">
      <h1>Style Props</h1>
      <ButtonStyle btnStyle={btnStyles}></ButtonStyle>
    </div>
  );
}

export default App;
