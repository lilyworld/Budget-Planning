import logo from './logo.svg';
import './App.css';
import React from 'react';
import Planning_Componenet from './components/Planning_Component';

class App extends React.Component{
  render(){
    return (
        <div>
        <h1>hello world</h1>
        <Planning_Componenet/>
        </div>
      )
  }
  
}

export default App;
