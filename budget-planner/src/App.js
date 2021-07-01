
import './App.css';
import React from 'react';
import Planning_Component from './components/Planning_Component';
import HomePage from './components/homepage';
import './index.css';

class App extends React.Component{
  constructor(Props){
    super(Props);
    this.state = {
      Items:[],
      wantList_Items:[],
      needList_Items:[],
      input_Name : "",
      input_Price : "",
      Wantchecked: false, //zero for Need
      Needchecked: false,
      Balance:123

    };

  }

  changePage = ()=>{
    var value = !this.state.display;
    this.setState({display:value})
  }
  render(){
    var display_Component;
    if(this.state.display == false)
    {
      display_Component = <div><h1 >Budget Balance:$<span id="amt1">{this.state.Balance}</span></h1><HomePage/></div>;
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
