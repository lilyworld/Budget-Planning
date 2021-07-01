
import './App.css';
import React from 'react';
import Planning_Component from './components/Planning_Component';
import HomePage from './components/homepage';
import './index.css';

class App extends React.Component{
  constructor(Props){
    super(Props);
    this.state = {
      display: false
      
    };

  }

  changePage = ()=>{
    var value = !this.state.display;
    this.setState({display:value})
  }
  render(){
    let display_Component;
    if(this.state.display == false)
    {
      display_Component = <HomePage/>;
    }
    else
    {
      display_Component = <Planning_Component/>;
    }
    return (
        <div className = "App">

        {display_Component}
        <button onClick = {this.changePage}>Change</button>
        </div>
      )
  }
  
}

export default App;
