
import './App.css';
import React from 'react';
<<<<<<< HEAD
=======
import HomePage from './components/homepage';
>>>>>>> deye
import './index.css';
import Total_budgetBar from './components/Total_BudgetBar';
import SavingList from './components/SavingList';

class App extends React.Component{
  constructor(Props){
    super(Props);
    this.state = {
      display:false,
      Items:[],
      wantList_Items:[],
      needList_Items:[],
      input_Name : "",
      input_Price : "",
      Wantchecked: false, //zero for Need
      Needchecked: false,
<<<<<<< HEAD
      Balance:0.00,
      Need_Amount:0.00,
      Want_Amount:0.00,
      Saving_Amount:0.00,
      Need_Percent:0,
      Want_Percent:0,
      Saving_Percent:0
=======
      Balance:0
>>>>>>> deye

    };

  }
  addamt = ()=>{
    this.addfunction();
    var value = document.getElementById("amt1").innerHTML;
    this.setState({Balance:value})
  }

  minusamt = ()=>{
    this.minusfunction();
    var value = document.getElementById("amt1").innerHTML;
    this.setState({Balance:value})
  }

  clearamt = ()=>{
    this.clearfunction();
    var amt = document.getElementById("amt1").innerHTML;
    var needamt = document.getElementById("needamt").innerHTML;
    var wantamt = document.getElementById("wantamt").innerHTML;
    var savingamt = document.getElementById("savingamt").innerHTML;
    var needp = document.getElementById("need-percent").innerHTML;
    var wantp = document.getElementById("want-percent").innerHTML;
    var savingp = document.getElementById("saving-percent").innerHTML
    this.setState({Balance:amt})
    this.setState({Need_Amount:needamt})
    this.setState({Want_Amount:wantamt})
    this.setState({Saving_Amount:savingamt})
    this.setState({Need_Percent:needp})
    this.setState({Want_Percent:wantp})
    this.setState({Saving_Percent:savingp})
  }

  needdelete= ()=>{
    this.needresetfunction();
    var needamt = document.getElementById("needamt").innerHTML;
    var needp = document.getElementById("need-percent").innerHTML;
    this.setState({Need_Amount:needamt})
    this.setState({Need_Percent:needp})
  }

  needenter= ()=>{
    this.needsfunction();
    var needamt = document.getElementById("needamt").innerHTML;
    var needp = document.getElementById("need-percent").innerHTML;
    this.setState({Need_Amount:needamt})
    this.setState({Need_Percent:needp})
  }

<<<<<<< HEAD
  wantdelete= ()=>{
    this.wantresetfunction();
    var wantamt = document.getElementById("wantamt").innerHTML;
    var wantp = document.getElementById("want-percent").innerHTML;
    this.setState({Need_Amount:wantamt})
    this.setState({Need_Percent:wantp})
  }

  wantenter= ()=>{
    this.wantsfunction();
    var wantamt = document.getElementById("wantamt").innerHTML;
    var wantp = document.getElementById("want-percent").innerHTML;
    this.setState({Need_Amount:wantamt})
    this.setState({Need_Percent:wantp})
  }

  savingdelete= ()=>{
    this.savingresetfunction();
    var savingamt = document.getElementById("savingamt").innerHTML;
    var savingp = document.getElementById("saving-percent").innerHTML;
    this.setState({Need_Amount:savingamt})
    this.setState({Need_Percent:savingp})
  }

  savingenter= ()=>{
    this.savingsfunction();
    var savingamt = document.getElementById("savingamt").innerHTML;
    var savingp = document.getElementById("saving-percent").innerHTML;
    this.setState({Need_Amount:savingamt})
    this.setState({Need_Percent:savingp})
  }

=======
>>>>>>> deye
  /**************************************************************** */
  //Planning page function
  //function to change component to display
  changePage = ()=>{
    this.planfunction();
    var savingamt = document.getElementById("savingamt").innerHTML;
    var savingp = document.getElementById("saving-percent").innerHTML;
    this.setState({Need_Amount:savingamt})
    this.setState({Need_Percent:savingp})
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
<<<<<<< HEAD

  
=======
>>>>>>> deye
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
<<<<<<< HEAD
    } 
   }  
=======
      }
    }
    
>>>>>>> deye
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
<<<<<<< HEAD
      display_Component =  <div>
      <h1 >Budget Balance:$<span id="amt1">{this.state.Balance}</span></h1>
      <button onClick={this.minusamt} id="minus1">-</button>
      <input type="number" id="input1" placeholder="Enter Budget Amount" min="0"></input>
      <button onClick={this.addamt} id="add1">+</button>
      <br></br>
      <button onClick={this.clearamt} id="clear1">Clear</button>
      <br></br>
      <p id="p1">Needs
                  <br></br>
                  <p>Budget:<span id="need-percent">50</span>%</p>
                  <p>Amount:$<span id="needamt">0.00</span></p>
                  <input id="needinput" type="number" placeholder="Budget Percentage"></input>%
                  <br></br>
                  <button onClick={this.needdelete} id="bt">Reset</button>
                  <button onClick={this.needenter} id="bt">Enter</button>
                  </p>
      
                  <p id="p1">Wants
                  <br></br>
                  <p>Budget:<span id="want-percent">30</span>%</p>
                  <p>Amount:$<span id="wantamt">0.00</span></p>
                  <input id="wantinput" type="number" placeholder="Budget Percentage"></input>%
                  <button onClick={this.wantdelete} id="bt">Reset</button>
                  <button onClick={this.wantenter} id="bt">Enter</button>
                  </p>
      
                  <p id="p1">Savings
                  <br></br>
                  <p>Budget:<span id="saving-percent">20</span>%</p>
                  <p>Amount:$<span id="savingamt">0.00</span></p>
                  <input id="savinginput" type="number" placeholder="Budget Percentage"></input>%
                  <button onClick={this.savingdelete} id="bt">Reset</button>
                  <button onClick={this.savingenter} id="bt">Enter</button>
                  </p>
                  <h2>Budget Available:<span id="counter">0</span>%</h2>
                  <button onClick={this.changePage} id="bt1">Go to Planning</button>
      </div>;
=======
      display_Component = <HomePage/>//if part of the code do not need setState place it in a sepepated component
>>>>>>> deye
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
        </div>
      )
  }
  
}

export default App;
