import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';

const user1 = {
  name: "Anisul Islam",
  age: 23,
  isRegistered: false,
  lang: ["Bangla", "English"]
}
const user2 = {
  name: "Rabeya Islam",
  age: 22,
  isRegistered: true,
  lang: ["Bangla", "Finish"]
}

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <User user={user1}></User>
      <User user={user2}></User>
    </div>
  );
}

export default App;
