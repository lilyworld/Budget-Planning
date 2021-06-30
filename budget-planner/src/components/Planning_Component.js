import React, { Component } from 'react';
import SavingList from './SavingList';

class Planning_Componenet extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        wantList_Items:[],
        needList_Items:[],
        input_Name : "",
        input_Price : "",
        Wantchecked: false, //zero for Need
        Needchecked: false
      };
    }
    
    selectWant = (e) =>{
      var value = e.target.checked;
      this.setState({Wantchecked: value, Needchecked:!value})
  
    }
  
    selectNeed = (e) =>{
      var value = e.target.checked;
      this.setState({Needchecked: value, Wantchecked:!value})
    }
  
    handleNameInput = (e)=>{
      var name = e.target.value;
      this.setState({input_Name: name})
    }
  
    handlePriceInput = (e)=>{
      var price = e.target.value;
      this.setState({input_Price: price})
    }
  
    add = () =>{
      var newObject = {Name: this.state.input_Name, Price: this.state.input_Price};
      var copy_array = [];
      if(this.state.Wantchecked)
      {
        copy_array = [...this.state.wantList_Items, newObject];
        this.setState({wantList_Items: copy_array})
      }
      else{
        copy_array = [...this.state.needList_Items, newObject];
        this.setState({needList_Items: copy_array})
      }
      //this.resetInput();uncommon this for user
      
    }
  
  
    resetInput = () =>{
      this.setState({
        input_Name : "",
        input_Price : "",
        Wantchecked: false, 
        Needchecked: false
      })
    }
  
    render(){
      return(
        <div>
        <div id="WantList_Container">
        <h3>Wants List:(currently 30%) </h3>
        <div id = "Want_Remaining_Budget">*Remaining Budget: $0</div>
        <ul  id = "Want_List">
          {this.state.wantList_Items.map(
            (Items)=> <li key = {Items.Name}><input type = "checkBox"/>{Items.Name}: ${Items.Price} </li>
          )}
        </ul>
        <button onClick = {this.delete_item} name= "delete_button" type = "botton" id = "WantList_Delete">Delete</button>
  
        <button onClick = {this.reset} name= "reset_button" type = "reset" id = "WantList_Reset">Reset</button>
        </div>
  
  
        <div id="NeedList_Container">
              <h3>Needs List:(currently 50%) </h3>
              <div id = "Need_Remaining_Budget">*Remaining Budget: $0</div>
              <ul id = "Need_List">
         {this.state.needList_Items.map(
            (Items)=> <li key = {Items.Name}><input type = "checkBox"/>{Items.Name}: ${Items.Price} </li>
          )}
              </ul>
              
                  
              <button name= "delete_button" id = "NeedList_Delete">Delete</button>
  
              <button name= "reset_button" type = "reset" value = "Reset" id = "NeedList_Reset">Reset</button>
            </div>
  
        <SavingList/>
  
  
        <div id = "addinput">
              <h3>Add your item</h3>
              
              <label htmlFor = "Item Type" id = "ItemType_Label">Item type:</label>
              <label htmlFor ="want">Want</label>
              <input type= "radio" id = "WantRadio" checked = {this.state.Wantchecked} onChange = {this.selectWant}/>
  
              <label htmlFor ="Need">Need</label>
              <input type= "radio" id = "NeedRadio" name = "Item Type" checked = {this.state.Needchecked} onChange = {this.selectNeed}/>
              <br/>
  
              <label htmlFor = "NameTextBox" id = "NameTextBox_Label">Name: </label>
              <input type = "text" id = "NameTextBox" placeholder = "Ex: Ps5" value = {this.state.input_Name} onChange = {this.handleNameInput}/>
              <br/>
              <label htmlFor = "PriceBox" id="PriceBox_Label">Price: </label>
              <input type = "number" id = "PriceBox" placeholder= "Ex: 399" value = {this.state.input_Price} onChange = {this.handlePriceInput}/>
  
              <button className = "ADDInputButton" id = "AddInput_Add_to_list" onClick = {this.add}>Add to list </button>
  
              <button className = "ADDInputButton" id = "AddInput_Reset" onClick = {this.resetInput}>Reset </button>
          </div>
        </div>
      );
    }
  }

  export default Planning_Componenet;