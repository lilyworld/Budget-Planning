
import './App.css';
import React from 'react';
import HomePage from './components/homepage';
import './index.css';
import Total_budgetBar from './components/Total_BudgetBar';
import SavingList from './components/SavingList';

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
      Balance:0

    };

  }

  /**************************************************************** */
  //Planning page function
  //function to change component to display
  changePage = ()=>{
    var value = !this.state.display;
    this.setState({display:value})
  }
  //seleteWant and update the state in planning page
  selectWant = (e) =>{
    var value = e.target.checked;
    this.setState({Wantchecked: value, Needchecked:!value})

  }
  //seteteNeed and update the state in planning page
  selectNeed = (e) =>{
    var value = e.target.checked;
    this.setState({Needchecked: value, Wantchecked:!value})
  }

  //get the value of textbar for name and update the state in planning page
  handleNameInput = (e)=>{
    var name = e.target.value;
    this.setState({input_Name: name})
  }

  //get the value of textbar for price and update the state in planning page
  handlePriceInput = (e)=>{
    var price = e.target.value;
    this.setState({input_Price: price})
  }

  //function handle add button in planning page
  add = () =>{
    if(this.checkInputFields() == false)
    {
      alert("Missing inputs");
      return;
    }
    var newObject = {Name: this.state.input_Name, Price: this.state.input_Price};
    var copy_array = [];
    var duplicate_index_W = this.checkDuplicate(newObject.Name, 0);// -1 if no duplicate
    var duplicate_index_N = this.checkDuplicate(newObject.Name, 1);// -1 if no duplicate 

    if(this.state.Wantchecked && duplicate_index_W!= -1)
    {
      copy_array = this.state.wantList_Items;
      copy_array[duplicate_index_W].Price = Number(copy_array[duplicate_index_W].Price) + Number(this.state.input_Price);//since price was store as string
      //copy_array = [...this.state.wantList_Items, newObject];
      this.setState({wantList_Items: copy_array})
    }
    else if(this.state.Needchecked && duplicate_index_N!= -1){
      copy_array = this.state.needList_Items;
      copy_array[duplicate_index_N].Price = Number(copy_array[duplicate_index_N].Price) + Number(this.state.input_Price); 
      //copy_array = [...this.state.wantList_Items, newObject];
      this.setState({needList_Items: copy_array})
    }
    else if(this.state.Wantchecked)
    {
      copy_array = [...this.state.wantList_Items, newObject];
      this.setState({wantList_Items: copy_array})
    }
    else if(this.state.Needchecked)
    {
      copy_array = [...this.state.needList_Items, newObject];
      this.setState({needList_Items: copy_array})
    }
    //this.resetInput();uncommon this for user
  }
  checkDuplicate = (ItemName, ListType) =>{
    if(ListType == 0)//0 for want
    {
      for(let i = 0; i < this.state.wantList_Items.length; i++)
      {
        if(this.state.wantList_Items[i].Name == ItemName)
        {
          return i;
        }
      }
    }
    else if(ListType == 1)//1 for need list
    {
      for(let i = 0; i < this.state.needList_Items.length; i++)
      {
        if(this.state.needList_Items[i].Name == ItemName)
        {
          return i;
        }
      }
    }
    return -1; //-1 for no duplicate
  }
  //function check if the input box have want it has add button in planning page
  checkInputFields= ()=>{
    if(this.state.input_Name == "" || this.state.input_Price == "" || (this.state.Needchecked == false &&this.state.Wantchecked == false))
    {
      this.resetInput();
      return false;
    }
    return true;
  }

  //reset function for planning page
  resetInput = () =>{
    this.setState({
      input_Name : "",
      input_Price : "",
      Wantchecked: false, 
      Needchecked: false
    })
  }
  //function that delete items in list in planning page
  delete_item = (e)=>{
    var Object_Name = e.target.id;
    var ClassName = e.target.className;
    var copy_array;
    if(ClassName == "Want")
    {
      copy_array = this.state.wantList_Items;
      for(let i = 0; i < copy_array.length; i++)
      {
        if(copy_array[i].Name == Object_Name)
        {
          copy_array.splice(i,1);
          this.setState({wantList_Items: copy_array})
          return;
        }
      }
    }
    else if(ClassName == "Need"){
      copy_array = this.state.needList_Items;
      for(let i = 0; i < copy_array.length; i++)
      {
        if(copy_array[i].Name == Object_Name)
        {
          copy_array.splice(i,1);
          this.setState({needList_Items: copy_array})
          return;
        }
      }
    }
    
  }

  //function clean all the list items for a list in planning page
  resetItems=(e)=>{
    if(e.target.id == "WantList_Reset")
    {
      this.setState({wantList_Items:[]})
    }
    else if(e.target.id == "NeedList_Reset")
    {
      this.setState({needList_Items:[]})
    }
  }
  /**************************** ************************************************* */

  render(){
    var display_Component;
    if(this.state.display == false)
    {
      display_Component = <HomePage/>//if part of the code do not need setState place it in a sepepated component
    }
    else
    {
      display_Component = <div>
      <Total_budgetBar/>
      <div id="WantList_Container">
      <h3>Wants List:(currently 30%) </h3>
      <div id = "Want_Remaining_Budget">*Remaining Budget: $0</div>
      <ul  id = "Want_List">
        {this.state.wantList_Items.map(
          (Item)=> <li key = {Item.Name}> {Item.Name}: ${Item.Price}<button type = "button" onClick = {this. delete_item} id = {Item.Name} className = "Want">x</button> </li>//add icon to delete button
        )}
      </ul>
      <button onClick = {this.resetItems} name= "reset_button" type = "reset" id = "WantList_Reset">Reset</button>
      </div>


      <div id="NeedList_Container">
            <h3>Needs List:(currently 50%) </h3>
            <div id = "Need_Remaining_Budget">*Remaining Budget: $0</div>
            <ul id = "Need_List">
       {this.state.needList_Items.map(
          (Item)=> <li key = {Item.Name}> {Item.Name}: ${Item.Price} <button type = "button" onClick = {this. delete_item} id = {Item.Name} className = "Need">x</button></li>//add icon to delete button
        )}
            </ul>

            <button onClick = {this.resetItems} name= "reset_button" type = "reset" value = "Reset" id = "NeedList_Reset">Reset</button>
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
      </div>;
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
