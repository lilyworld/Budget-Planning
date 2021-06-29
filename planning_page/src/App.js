import logo from './logo.svg';
import './App.css';
import React from 'react';

function Navigation_bar(Pros){
  return (
    <ul id = "navigation_bar">
			<li class= "navigation_item">	
				<a href="">Home</a>
			</li>
			<li class= "navigation_item">
				<a href="">Service information</a>
			</li>
			<li class= "navigation_item">
				<a href="">Contact us</a>
			</li>
		</ul>
  );
}

function Total_budgetBar(Props){
  return (<div><h1 id = "budget_bar">Total Budget: $3000 </h1></div>);
}

class WantList extends React.Component{
  constructor(props){
    super(props);
    this.state = {ListItems:[{Name:"Ps5", Price: 399.99},{Name:"TV", Price: 399.99},{Name: "Movie Ticket", Price: 399.99}]};
  }

  delete_item = () => {
    var collection = document.getElementsByClassName("Want_Item");//return html colletion
    const ids=[];//creat a empty array
    for(let i = 0; i < collection.length; i++)
    {
      if(collection[i].checked)
      {
        ids.push(collection[i].id);
      }
    }
    for(let i =0; i < ids.length; i++)
    {
      document.getElementById(ids[i]).parentNode.remove();
    }
  }
  reset = () =>{
    var collection = document.getElementsByClassName("Want_Item");
    for(let i = 0; i < collection.length;i++)
    {
      collection[i].checked = false;
    }
  }

  render(){
    return (
    <div id="WantList_Container">
    <h3>Wants List:(currently 30%) </h3>
    <div id = "Want_Remaining_Budget">*Remaining Budget: $0</div>
    <ul  id = "Want_List">
      {this.state.ListItems.map(ListItem => (
        <li key = {ListItem}>
          <input type = 'checkbox' className = "Want_Item" id = {ListItem.Name} /><label><span>{ListItem.Name}</span>:$ <span>{ListItem.Price}</span></label>
        </li>
      ))}
    </ul>
    <button onClick = {this.delete_item} name= "delete_button" type = "botton" id = "WantList_Delete">Delete</button>

    <button onClick = {this.reset} name= "reset_button" type = "reset" id = "WantList_Reset">Reset</button>
  </div>);
  }
}

class NeedList extends React.Component{
  constructor(props){
    super(props);
    this.state = {ListItems:["Ps5","TV","Movie Ticket"]};
  }
  render(){
    return (
      <div id="NeedList_Container">
			<h3>Needs List:(currently 50%) </h3>
			<div id = "Need_Remaining_Budget">*Remaining Budget: $0</div>
			<ul id = "Need_List">
      {this.state.ListItems.map(ListItem => (
        <li key = {ListItem}>
          <input type = 'checkbox'/><label>{ListItem}</label>
        </li>
      ))}
			</ul>
			
				
			<button name= "delete_button" id = "NeedList_Delete">Delete</button>

			<button name= "reset_button" type = "reset" value = "Reset" id = "NeedList_Reset">Reset</button>
		</div>
    );
  }
}

class SavingList extends React.Component{
  render(){
    return ( 
      <div id = "SavingList">
			<h3> Your saving(currenly 20%)</h3>
			<ul id = "SList">
				<li>Previous Saving: $0</li>
				<li>New saving: $0</li>
			</ul>
		</div>
    );
  }
}

class AddInputBox extends React.Component{
  render(){
    return(
      <div id = "addinput">
			<h3>Add your item</h3>
			
			<label for = "Item Type" id = "ItemType_Label">Item type:</label>
			<label for ="want">Want</label>
			<input type= "radio" id = "WantRadio" name = "Item Type"/>

			<label for ="Need">Need</label>
			<input type= "radio" id = "NeedRadio" name = "Item Type"/>
			<br/>

			<label for = "NameTextBox" id = "NameTextBox_Label">Name: </label>
			<input type = "text" id = "NameTextBox" placeholder = "Ex: Ps5"/>
			<br/>
			<label for = "PriceBox" id="PriceBox_Label">Price: </label>
			<input type = "number" id = "PriceBox" placeholder= "Ex: 399"/>

			<button class = "ADDInputButton" id = "AddInput_Add_to_list">Add to list </button>

			<button class = "ADDInputButton" id = "AddInput_Reset">Reset </button>
  	  </div>
    );
  }
}
function App() {
  return (
    <div>
    <Navigation_bar/>
    <Total_budgetBar/>
    <WantList/>
    <NeedList/>
    <SavingList/>
    <AddInputBox/>
    </div>
  );
}

export default App;
