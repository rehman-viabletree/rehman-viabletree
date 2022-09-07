import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginView from './Pages/Login';
import Home from './Pages/Events';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <LoginView/> */}
      <Home/>
    </div>
  );
}

export default App;
