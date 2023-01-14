import React, { useState } from 'react';
import './App.css';

type User = {
  id: number;
  name: string;
}

function App() {

  const [user, setUser] = useState<User>({} as User);

  const handleAddUser = () => {
    setUser({id: 1, name: 'Yeasin'})
  }

  return (
    <div className="App">
      <button onClick={handleAddUser}>Add User</button>
      <p>{user.name}</p>
    </div>
  );
}

export default App;
