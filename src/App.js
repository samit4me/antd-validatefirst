import React from 'react';
import './App.css';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Login />
      <Login validateFirst />
    </div>
  );
}

export default App;
