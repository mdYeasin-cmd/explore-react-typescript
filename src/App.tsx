import React from 'react';
import './App.css';
import DataFetch from './components/DataFetch';



function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <DataFetch status="error" />
    </div>
  );
}

export default App;
