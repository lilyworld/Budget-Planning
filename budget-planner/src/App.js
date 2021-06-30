import logo from './logo.svg';
import './App.css';
import React from 'react';
import Planning_Component from './components/Planning_Component';

class App extends React.Component{
  constructor(Props){
    super(Props);
    this.state = {
      display: true
      
    };

  }
  render(){
    let display_Component;
    if(this.state.display == false)
    {
      //alex's component
    }
    else
    {
      display_Component = <Planning_Component/>;
    }
    return (
        <div>
        {display_Component}
        </div>
      )
  }
  
}

export default App;
