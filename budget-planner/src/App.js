
import './App.css';
import React from 'react';
import './index.css';
import Planning_Component from './components/Planning_Component';
import {Bar, Doughnut} from "react-chartjs-2"

class App extends React.Component{
  constructor(Props){
    super(Props);
    this.state = {
      display:false,
      Hdisplay:false,
      Items:[],
      wantList_Items:[],
      needList_Items:[],
      input_Name : "",
      input_Price : "",
      Balance:0.00,
      Need_Amount:0.00,
      Need_Remaining:0.00,
      Want_Amount:0.00,
      Want_Remaining:0.00,
      Saving_Amount:0.00,
      Need_Percent:0,
      Want_Percent:0,
      Saving_Percent:0,
      selectType: "Select a type"
    };

  }
  /********************************** */
  //Homepage functions
  addamt = ()=>{
    this.addfunction();
    var value = document.getElementById("amt1").innerHTML;
    this.setState({Balance:value})
    var needamt = document.getElementById("needamt").innerHTML;
    var needp = document.getElementById("need-percent").innerHTML;
    this.setState({Need_Amount:needamt})
    this.setState({Need_Percent:needp})
    var wantamt = document.getElementById("wantamt").innerHTML;
    var wantp = document.getElementById("want-percent").innerHTML;
    this.setState({Want_Amount:wantamt})
    this.setState({Want_Percent:wantp})
    var savingamt = document.getElementById("savingamt").innerHTML;
    var savingp = document.getElementById("saving-percent").innerHTML;
    this.setState({Saving_Amount:savingamt})
    this.setState({Saving_Percent:savingp})
  }

  minusamt = ()=>{
    this.minusfunction();
    var value = document.getElementById("amt1").innerHTML;
    this.setState({Balance:value})
    var needamt = document.getElementById("needamt").innerHTML;
    var needp = document.getElementById("need-percent").innerHTML;
    this.setState({Need_Amount:needamt})
    this.setState({Need_Percent:needp})
    var wantamt = document.getElementById("wantamt").innerHTML;
    var wantp = document.getElementById("want-percent").innerHTML;
    this.setState({Want_Amount:wantamt})
    this.setState({Want_Percent:wantp})
    var savingamt = document.getElementById("savingamt").innerHTML;
    var savingp = document.getElementById("saving-percent").innerHTML;
    this.setState({Saving_Amount:savingamt})
    this.setState({Saving_Percent:savingp})
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

  wantdelete= ()=>{
    this.wantresetfunction();
    var wantamt = document.getElementById("wantamt").innerHTML;
    var wantp = document.getElementById("want-percent").innerHTML;
    this.setState({Want_Amount:wantamt})
    this.setState({Want_Percent:wantp})
  }

  wantenter= ()=>{
    this.wantsfunction();
    var wantamt = document.getElementById("wantamt").innerHTML;
    var wantp = document.getElementById("want-percent").innerHTML;
    this.setState({Want_Amount:wantamt})
    this.setState({Want_Percent:wantp})
  }

  savingdelete= ()=>{
    this.savingresetfunction();
    var savingamt = document.getElementById("savingamt").innerHTML;
    var savingp = document.getElementById("saving-percent").innerHTML;
    this.setState({Saving_Amount:savingamt})
    this.setState({Saving_Percent:savingp})
  }

  savingenter= ()=>{
    this.savingsfunction();
    var savingamt = document.getElementById("savingamt").innerHTML;
    var savingp = document.getElementById("saving-percent").innerHTML;
    this.setState({Saving_Amount:savingamt})
    this.setState({Saving_Percent:savingp})
  }

  changePage = ()=>{
    this.planfunction();
    var savingamt = document.getElementById("savingamt").innerHTML;
    var savingp = document.getElementById("saving-percent").innerHTML;
    this.setState({Saving_Amount:savingamt})
    this.setState({Saving_Percent:savingp})
    var value = !this.state.display;
    this.setState({display:value})

    var N_amt = this.state.Need_Amount;
    var W_amt = this.state.Want_Amount;
    this.setState({Need_Remaining: N_amt, Want_Remaining: W_amt, needList_Items: [], wantList_Items:[]})
  }
  PlanchangePage = ()=>{
    var value = !this.state.display;
    this.setState({display:value}) 
  }

  addfunction(){
    let y = document.getElementById("amt1").innerHTML;    /*y is a budget balance value */
    let x = document.getElementById("input1").value;       /*x is a input value */
    if(x<0 ||x==""){ //check for negative input or empty input
        alert("the value cannot be negative or the input cannot be empty")
    }
    else{
    let z = (x-0)+(y-0); // z = input value + budget balance value
    document.getElementById("amt1").innerHTML=z.toFixed(2); //set budget balance value with z
    document.getElementById("input1").value=""; //then reset every other inputs and budget percentages to zero when you add a new value for budget balance
    let need = z*0.50;
    let want = z*0.30;
    let saving = z*0.20;
    document.getElementById("needamt").innerHTML=need.toFixed(2);
    document.getElementById("wantamt").innerHTML=want.toFixed(2);
    document.getElementById("savingamt").innerHTML=saving.toFixed(2);
    document.getElementById("need-percent").innerHTML="50"
    document.getElementById("want-percent").innerHTML="30"
    document.getElementById("saving-percent").innerHTML="20"
    document.getElementById("counter").innerHTML="0"
                            //the same comments apply to minusfunction 
    }
}
minusfunction(){
    let y = document.getElementById("amt1").innerHTML;
    let x = document.getElementById("input1").value;
    if(x<0 ||x==""){
        alert("the value cannot be negative or the input cannot be empty")
    }else{
    if(y-x<0){
        alert("The input budget exceeded the current budget")
    }else{
    let z = y-x;
    document.getElementById("amt1").innerHTML=z.toFixed(2);
    document.getElementById("input1").value="";
    let need = z*0.50;
    let want = z*0.30;
    let saving = z*0.20;
    document.getElementById("needamt").innerHTML=need.toFixed(2);
    document.getElementById("wantamt").innerHTML=want.toFixed(2);
    document.getElementById("savingamt").innerHTML=saving.toFixed(2);
    document.getElementById("need-percent").innerHTML="50"
    document.getElementById("want-percent").innerHTML="30"
    document.getElementById("saving-percent").innerHTML="20"
    document.getElementById("counter").innerHTML="0"
    }
}
}
clearfunction(){
    //the clear function basically set all other value to zero
    document.getElementById("amt1").innerHTML="0.00"
    document.getElementById("needamt").innerHTML="0.00"
    document.getElementById("wantamt").innerHTML="0.00"
    document.getElementById("savingamt").innerHTML="0.00"
    document.getElementById("need-percent").innerHTML="0"
    document.getElementById("want-percent").innerHTML="0"
    document.getElementById("saving-percent").innerHTML="0"
    document.getElementById("counter").innerHTML="100"
}

needsfunction(){
    let x = document.getElementById("amt1").innerHTML;    /*x is Budget balance value*/
    let n = document.getElementById("needinput").value; /*n is need box input value*/
    let m=document.getElementById("counter").innerHTML; /*m is a counter for budget left value*/
    let y = document.getElementById("need-percent").innerHTML; /*y is need percentage value*/
    if(n<0 || x==0 || n==""){   /*check for if the input value is negative or budget balance is zero or need box input is empty */
        alert("the input cannot be negative or the input cannot be empty")
    }else if((m-n)<0 &&(((m-0)+(y-0))-n)<0){ /*check if counter value minus need box input value is less than zero or counter value add need percentage then minus need input value is less than zero*/
        alert("the budget percent input is too big");
    }
    else{
        m=(m-0)+(y-0);/*  set m = counter value add need percentage value  */
        m=m-n; /*set m = counter value minus need box input value*/
    document.getElementById("counter").innerHTML=m.toFixed(2); /*set counter value = new counter value with 2 decemal places */
    document.getElementById("needamt").innerHTML=(x*(n/100)).toFixed(2);/*set need amount = budget balance value*(need input /100) */
    document.getElementById("need-percent").innerHTML=(n-0)-0;/*set need percentage with new need box input value  */
                                            /*the same comments above apply to the two functions below */
    }
} 

wantsfunction(){
    let x = document.getElementById("amt1").innerHTML;
    let n = document.getElementById("wantinput").value;
    let m=document.getElementById("counter").innerHTML;
    let y = document.getElementById("want-percent").innerHTML;
    if(n<0 || x==0 || n==""){   /*check for negative input*/
        alert("the input cannot be negative or the input cannot be empty")
    }else if((m-n)<0 &&(((m-0)+(y-0))-n)<0){
        alert("the budget percent input is too big");
    }
    else{
        m=(m-0)+(y-0)
        m=m-n;
    document.getElementById("counter").innerHTML=m.toFixed(2);
    document.getElementById("wantamt").innerHTML=(x*(n/100)).toFixed(2);
    document.getElementById("want-percent").innerHTML=(n-0)-0;

    }
} 
savingsfunction(){
    let x = document.getElementById("amt1").innerHTML;
    let n = document.getElementById("savinginput").value;
    let m=document.getElementById("counter").innerHTML;
    let y = document.getElementById("saving-percent").innerHTML;
    if(n<0 || x==0 ||n==""){   /*check for negative input*/
        alert("the input cannot be negative or the input cannot be empty")
    }else if((m-n)<0 &&(((m-0)+(y-0))-n)<0){
        alert("the budget percent input is too big");
    }
    else{
        m=(m-0)+(y-0)
        m=m-n;
    document.getElementById("counter").innerHTML=m.toFixed(2);
    document.getElementById("savingamt").innerHTML=(x*(n/100)).toFixed(2);
    document.getElementById("saving-percent").innerHTML=(n-0)-0;

    }
}

    needresetfunction(){
        let x = document.getElementById("need-percent").innerHTML;
        let y = document.getElementById("counter").innerHTML;
        document.getElementById("need-percent").innerHTML=0;
        document.getElementById("needamt").innerHTML=(0).toFixed(2);
        document.getElementById("needinput").value="";
        document.getElementById("counter").innerHTML=((x-0)+(y-0)).toFixed(2);
    } 
    wantresetfunction(){
        let x = document.getElementById("want-percent").innerHTML;
        let y = document.getElementById("counter").innerHTML;
        document.getElementById("want-percent").innerHTML=0;
        document.getElementById("wantamt").innerHTML=(0).toFixed(2);
        document.getElementById("wantinput").value="";
        document.getElementById("counter").innerHTML=((x-0)+(y-0)).toFixed(2);
    }
    savingresetfunction(){
        let x = document.getElementById("saving-percent").innerHTML;
        let y = document.getElementById("counter").innerHTML;
        document.getElementById("saving-percent").innerHTML=0;
        document.getElementById("savingamt").innerHTML=(0).toFixed(2);
        document.getElementById("savinginput").value="";
        document.getElementById("counter").innerHTML=((x-0)+(y-0)).toFixed(2);
    }

    planfunction(){
        let x= document.getElementById("counter").innerHTML;
        let y= document.getElementById("saving-percent").innerHTML;
        let m=document.getElementById("amt1").innerHTML;
        if(x!=0){
            let n = (x-0)+(y-0);
            m=m*(n/100);
            document.getElementById("saving-percent").innerHTML=n;
            document.getElementById("savingamt").innerHTML=m.toFixed(2);
            document.getElementById("counter").innerHTML=0;

        }

    }

  /**************************************************************** */
  //Planning page function

  //get the value of textbar for name and update the state in planning page
  handleNameInput = (value)=>{
    this.setState({input_Name: value})
  }

  //get the value of textbar for price and update the state in planning page
  handlePriceInput = (value)=>{
    this.setState({input_Price: value})
  }

  //function handle add button in planning page
  add = () =>{
    if(this.checkInputFields() == false)
    {
      alert("Missing inputs");
      return;
    }
    
    
    var newObject = {Name: this.state.input_Name, Price: Number(this.state.input_Price).toFixed(2)};
    var copy_array = [];
    var duplicate_index_W = this.checkDuplicate(newObject.Name, 0);// return -1 if no duplicate
    var duplicate_index_N = this.checkDuplicate(newObject.Name, 1);// return -1 if no duplicate 

    //follwing will reset input field if over butget amount
    if(this.state.selectType =="Want" && duplicate_index_W!= -1)
    {
      if(this.state.Want_Remaining - this.state.input_Price < 0)//check if the prices over the budgets
      {
        alert("Processing items excessing your current budget");
        //this.resetInput(); 
        return;
      }
      
      copy_array = this.state.wantList_Items;
      copy_array[duplicate_index_W].Price = (Number(copy_array[duplicate_index_W].Price) + Number(this.state.input_Price)).toFixed(2);//since price was store as string
      //copy_array = [...this.state.wantList_Items, newObject];
      this.setState({wantList_Items: copy_array, Want_Remaining: (this.state.Want_Remaining - this.state.input_Price).toFixed(2)})//sss
    }
    else if(this.state.selectType=="Need" && duplicate_index_N!= -1){

      if(this.state.Need_Remaining - this.state.input_Price < 0)//check if the prices over the budgets
      {
        alert("Processing items excessing your current budget");
        //this.resetInput(); 
        return;
      }
      copy_array = this.state.needList_Items;
      copy_array[duplicate_index_N].Price = (Number(copy_array[duplicate_index_N].Price) + Number(this.state.input_Price)).toFixed(2); 
      //copy_array = [...this.state.wantList_Items, newObject];
      this.setState({needList_Items: copy_array, Need_Remaining: (this.state.Need_Remaining - this.state.input_Price).toFixed(2)})
    }
    else if(this.state.selectType == "Want")
    {
      if(this.state.Want_Remaining - this.state.input_Price < 0)//check if the prices over the budgets
      {
        alert("Processing items excessing your current budget");
        //this.resetInput(); 
        return;
      }

      copy_array = [...this.state.wantList_Items, newObject];
      this.setState({wantList_Items: copy_array, Want_Remaining: (this.state.Want_Remaining - this.state.input_Price).toFixed(2)})
    }
    else if(this.state.selectType == "Need")
    {
      if(this.state.Need_Remaining - this.state.input_Price < 0)//check if the prices over the budgets
      {
        alert("Processing items excessing your current budget");
        //this.resetInput(); 
        return;
      }
      copy_array = [...this.state.needList_Items, newObject];
      this.setState({needList_Items: copy_array, Need_Remaining: (this.state.Need_Remaining - this.state.input_Price).toFixed(2)})
    }
    this.resetInput();
  }

  //checkout if list contain this item already
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
    if(this.state.input_Name == "" || this.state.input_Price == "" || this.state.selectType == "Select a type")
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
      selectType: "Select a type"
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
          var x = copy_array[i].Price;//get the price of remove item
          copy_array.splice(i,1);
          var remain = this.state.Want_Remaining;
          this.setState({wantList_Items: copy_array, Want_Remaining: (Number(remain) + Number(x))})
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
          var x = copy_array[i].Price;//get the price of remove item
          copy_array.splice(i,1);
          var remain = this.state.Need_Remaining;
          this.setState({NeedList_Items: copy_array, Need_Remaining: (Number(remain) + Number(x))})
        }
      }
    }
    
  }

  //function clean all the list items for a list in planning page
  resetItems=(e)=>{
    if(e.target.id == "WantList_Reset")
    {
      var x = this.state.Want_Amount;
      this.setState({wantList_Items:[], Want_Remaining: x})
    }
    else if(e.target.id == "NeedList_Reset")
    {
      var x = this.state.Need_Amount;
      this.setState({needList_Items:[], Need_Remaining: x})
    }
  }

  handleSelectChange = (value)=> this.setState({selectType: value});
  /**************************** ************************************************* */
  //History Page
  HisChange = ()=>{
    var value = !this.state.Hdisplay;
    this.setState({Hdisplay:value}) 
  }

  render(){
    var display_Component;
    if(this.state.display == false)
    {
      display_Component = display_Component =  <div  className = "App">
      <h1 >Budget Balance:$<span id="amt1">{this.state.Balance}</span></h1>
      <button onClick={this.minusamt} id="minus1">-</button>
      <input type="number" id="input1" placeholder="Enter Budget Amount" min="0"></input>
      <button onClick={this.addamt} id="add1">+</button>
      <br></br>
      <button onClick={this.clearamt} id="clear1">Clear</button>
      <br></br>
      <p id="p1">Needs
                  <br></br>
                  <p>Budget:<span id="need-percent">{this.state.Need_Percent}</span>%</p>
                  <p>Amount:$<span id="needamt">{this.state.Need_Amount}</span></p>
                  <input id="needinput" type="number" placeholder="Budget Percentage"></input>%
                  <br></br>
                  <button onClick={this.needdelete} id="bt">Reset</button>
                  <button onClick={this.needenter} id="bt">Enter</button>
                  </p>
      
                  <p id="p1">Wants
                  <br></br>
                  <p>Budget:<span id="want-percent">{this.state.Want_Percent}</span>%</p>
                  <p>Amount:$<span id="wantamt">{this.state.Want_Amount}</span></p>
                  <input id="wantinput" type="number" placeholder="Budget Percentage"></input>%
                  <button onClick={this.wantdelete} id="bt">Reset</button>
                  <button onClick={this.wantenter} id="bt">Enter</button>
                  </p>
      
                  <p id="p1">Savings
                  <br></br>
                  <p>Budget:<span id="saving-percent">{this.state.Saving_Percent}</span>%</p>
                  <p>Amount:$<span id="savingamt">{this.state.Saving_Amount}</span></p>
                  <input id="savinginput" type="number" placeholder="Budget Percentage"></input>%
                  <button onClick={this.savingdelete} id="bt">Reset</button>
                  <button onClick={this.savingenter} id="bt">Enter</button>
                  </p>
                  <h2>Budget Available:<span id="counter">0</span>%</h2>
                  <button onClick={this.changePage} id="bt1">Go to Planning</button>
                  <div className = "MyDoughnut">
                  <Doughnut data={{
                  labels:["Wants", "Needs", "Saving"],
                   datasets:[{
                   label:"Needs",
                   data:[this.state.Want_Percent, this.state.Need_Percent, this.state.Saving_Percent],//interestingly, the JSX expression in here do not need to wrapped by {}
                   backgroundColor:["rgba(62,237,231,0.9)","rgba(255,179,167,0.9)", "rgba(164,226,198,0.9)"]
                    }]
                    }}

                    options={{
                    maintainAspectRatio:false,
                    animation: {duration:0}//animation disable
                     }}
                    />  
                  </div>
      </div>;
    }
    else if(this.state.Hdisplay===false && this.state.display===true)
    {
      display_Component = <Planning_Component wantList_Items = {this.state.wantList_Items}
                                              needList_Items = {this.state.needList_Items}
                                              input_Name = {this.state.input_Name}
                                              input_Price = {this.state.input_Price}
                                              Balance = {this.state.Balance}
                                              Need_Amount = {this.state.Need_Amount}
                                              Need_Remaining = {this.state.Need_Remaining}
                                              Want_Amount = {this.state.Want_Amount}
                                              Want_Remaining = {this.state.Want_Remaining}
                                              Saving_Amount = {this.state.Saving_Amount}
                                              Need_Percent = {this.state.Need_Percent}
                                              want_Percent = {this.state.Want_Percent}
                                              Saving_Percent = {this.state.Saving_Percent}
                                              selectType = {this.state.selectType}
                                              HisChange = {this.HisChange}
                                              PlanchangePage = {this.PlanchangePage}
                                              handleNameInput = {this.handleNameInput}//for InputBoxes
                                              handlePriceInput = {this.handlePriceInput}//Component
                                              handleSelectChange = {this.handleSelectChange}//s
                                              resetInput = {this.resetInput}//for inputBoxes
                                              add = {this.add}//for inputBoxes
                                              delete_item = {this.delete_item}//for wantList, needList
                                              resetItems = {this.resetItems}//for wantList, needList
                                              />;
    }else if(this.state.display===true && this.state.Hdisplay===true){
      display_Component = <div className="HApp">
        <h1>History Page</h1>
        <Bar id="bar" data={{
          labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
          datasets:[{
            label:"Needs",
            data:[1,2,3,4,5,6,7,8,9,10,11,12],
            backgroundColor:"blue"
          },{
            label:"Savings", 
            data:[12,11,10,9,8,7,6,5,4,3,2,1],
            backgroundColor:"green"
          }]
        }}
        
        options={{
          maintainAspectRatio:false
        }}
        />
      <button onClick={this.HisChange} id="bt1">Go Back</button>
      </div>
    }
    return (
        <div>
        
        {display_Component}
        </div>
      )
  }
  
}

export default App;
