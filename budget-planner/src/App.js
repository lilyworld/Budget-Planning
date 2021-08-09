
import './App.css';
import React from "react";
import './index.css';
import Planning_Component from './components/Planning_Component';
import {Bar, Doughnut} from "react-chartjs-2";
import Navigation from "./components/Navigation";
import axios from "axios";
import HistoryPage from './components/HistoryPage';

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
     // Budget_Available:100,
      Need_Amount:0.00,
      Need_Remaining:0.00,
      Want_Amount:0.00,
      Want_Remaining:0.00,
      Saving_Amount:0.00,
      Need_Percent:0,
      Want_Percent:0,
      Saving_Percent:0,
      selectType: "Select a type",
      chartData:{
        labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets:[{
          label:"Needs",
          data:[0,0,0,0,0,0,0,0,0,0,0,0],
          backgroundColor:"red"
        },{
          label:"Wants",
          data:[0,0,0,0,0,0,0,0,0,0,0,0],
          backgroundColor:"blue"
        },{
          label:"Savings",
          data:[0,0,0,0,0,0,0,0,0,0,0,0],
          backgroundColor:"green"
        }]
      },
      historyData:[{
        total_spending:0,
        total_saving:0,
        Remaining_budget:0,
      },
      {
        total_spending:0,
        total_saving:0,
        Remaining_budget:0,
      },
      {
        total_spending:0,
        total_saving:0,
        Remaining_budget:0,
      },{
        total_spending:0,
        total_saving:0,
        Remaining_budget:0,
      },{
        total_spending:0,
        total_saving:0,
        Remaining_budget:0,
      },{
        total_spending:0,
        total_saving:0,
        Remaining_budget:0,
      },{
        total_spending:0,
        total_saving:0,
        Remaining_budget:0,
      },{
        total_spending:0,
        total_saving:0,
        Remaining_budget:0,
      },{
        total_spending:0,
        total_saving:0,
        Remaining_budget:0,
      },{
        total_spending:0,
        total_saving:0,
        Remaining_budget:0,
      },{
        total_spending:0,
        total_saving:0,
        Remaining_budget:0,
      },{
        total_spending:0,
        total_saving:0,
        Remaining_budget:0,
      },],
      monthSelect:0,
      monthBudget:0,
    };

  }

  loadBudgetData = () => {
    this.setState({loading: true})
    if (localStorage.getItem("accessToken") === "") {
      this.setState({loading: false})
      return
    }
    const headers = {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
    }
    return axios.get("http://localhost:4990/budget", {headers: headers}).then((result) => {
          if (result === {}) {
            return
          }
          let balance = result.data[result.data.length-1]
          this.setState({
            Balance: balance.amount,
          })
          console.log("setting balance to:")
          console.log(balance)
        }).catch((reason) => {
          console.error("ERROR in loadData in componentDidMount")
          console.error(reason)
        }).finally(()=>{
          this.setState({loading: false})
        })
  }

  loadSaveData = () => {
    this.setState({loading: true})
    if (localStorage.getItem("accessToken") === "") {
      this.setState({loading: false})
      return
    }
    const headers = {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
    }
    return axios.get("http://localhost:4990/savings", {headers: headers}).then((result) => {
          if (result === {}) {
            return
          }
          let savings = result.data[result.data.length-1]
          this.setState({
            Saving_Amount: savings.amount,
            Saving_Percent: savings.percent,
          })
          console.log(savings)
        }).catch((reason) => {
          console.error("ERROR in loadData in componentDidMount")
          console.error(reason)
        }).finally(()=>{
          this.setState({loading: false})
        })
  }

  loadNeedData = () => {
    this.setState({loading: true})
    if (localStorage.getItem("accessToken") === "") {
      this.setState({loading: false})
      return
    }
    const headers = {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
    }
    return axios.get("http://localhost:4990/needs", {headers: headers}).then((result) => {
          if (result === {}) {
            return
          }
          let needs = result.data[result.data.length-1]
          this.setState({
            Need_Amount: needs.amount,
            Need_Percent: needs.percent,
          })
          console.log(needs)
        }).catch((reason) => {
          console.error("ERROR in loadData in componentDidMount")
          console.error(reason)
        }).finally(()=>{
          this.setState({loading: false})
        })
  }

  loadNeedListData = () => {
    this.setState({loading: true})
    if (localStorage.getItem("accessToken") === "") {
      this.setState({loading: false})
      return
    }
    const headers = {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
    }
    return axios.get("http://localhost:4990/need_list", {headers: headers}).then((result) => {
          if (result === {}) {
            return
          }
          console.log(result.data)
          let needListItems = result.data.map((item) => {
            let newItem = {
              Name: item.itemname,
              Price: item.price,
            }
            return newItem;
          })
          console.log('needWantList %o', needListItems)
          this.setState({
            needList_Items: needListItems
          })
        }).catch((reason) => {
          console.error("ERROR in loadData in componentDidMount")
          console.error(reason)
        }).finally(()=>{
          this.setState({loading: false})
        })
  }

  loadWantData = () => {
    this.setState({loading: true})
    if (localStorage.getItem("accessToken") === "") {
      this.setState({loading: false})
      return
    }
    const headers = {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
    }
    return axios.get("http://localhost:4990/wants", {headers: headers}).then((result) => {
          if (result === {}) {
            return
          }
          let wants = result.data[result.data.length-1]
          this.setState({
            Want_Amount: wants.amount,
            Want_Percent: wants.percent,
          })
          console.log(wants)
        }).catch((reason) => {
          console.error("ERROR in loadData in componentDidMount")
          console.error(reason)
        }).finally(()=>{
          this.setState({loading: false})
        })
  }
  
  loadWantListData = () => {
    this.setState({loading: true})
    if (localStorage.getItem("accessToken") === "") {
      this.setState({loading: false})
      return
    }
    const headers = {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
    }
    return axios.get("http://localhost:4990/want_list", {headers: headers}).then((result) => {
          if (result === {}) {
            return
          }
          console.log(result.data)
          let wantListItems = result.data.map((item) => {
            let newItem = {
              Name: item.itemname,
              Price: item.price,
            }
            return newItem;
          })
          console.log('loadWantList %o', wantListItems)
          this.setState({
            wantList_Items: wantListItems
          })
        }).catch((reason) => {
          console.error("ERROR in loadData in componentDidMount")
          console.error(reason)
        }).finally(()=>{
          this.setState({loading: false})
        })
  }

  loadNeedRemainData = () => {
    this.setState({loading: true})
    if (localStorage.getItem("accessToken") === "") {
      this.setState({loading: false})
      return
    }
    const headers = {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
    }
    return axios.get("http://localhost:4990/need_remain", {headers: headers}).then((result) => {
          if (result === {}) {
            return
          }
          let needs = result.data[result.data.length-1]
          this.setState({
            Need_Remaining: needs.amount,
          })
          console.log(needs)
        }).catch((reason) => {
          console.error("ERROR in loadData in componentDidMount")
          console.error(reason)
        }).finally(()=>{
          this.setState({loading: false})
        })
  }

  loadWantRemainData = () => {
    this.setState({loading: true})
    if (localStorage.getItem("accessToken") === "") {
      this.setState({loading: false})
      return
    }
    const headers = {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
    }
    return axios.get("http://localhost:4990/want_remain", {headers: headers}).then((result) => {
          if (result === {}) {
            return
          }
          let wants = result.data[result.data.length-1]
          this.setState({
            Want_Remaining: wants.amount,
          })
          console.log(wants)
        }).catch((reason) => {
          console.error("ERROR in loadData in componentDidMount")
          console.error(reason)
        }).finally(()=>{
          this.setState({loading: false})
        })
  }

  // componentDidMount is called before first render. We should put all backend calls to load data here.
  componentDidMount = ()=>{
    // Load budget data from backend.
    this.loadBudgetData()
    this.loadSaveData()
    this.loadNeedData()
    this.loadNeedListData()
    this.loadWantData()
    this.loadWantListData()
    this.loadNeedRemainData()
    this.loadWantRemainData()
    // TODO: Set savings, needs, want amounts based on percents from the budget data.
    // TODO: Load 
  }

  /********************************** */
  //Homepage functions
  addamt = ()=>{
    this.addfunction(); //call add function to do addition input value to budget balance
    var value = document.getElementById("amt1").innerHTML;
    this.setState({Balance:value}) //update balance value
    axios.post("http://localhost:4990/budget",
    {
      amount: value
     },
    {
       headers: {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
       },
     }
     ).then(() => {
     console.log("IT WORKED");
   });

    sessionStorage.setItem('Balance',value.toString());//sessionStorage example
    var needamt = document.getElementById("needamt").innerHTML;
    var needp = document.getElementById("need-percent").innerHTML;
    axios.post("http://localhost:4990/needs",
    {
      amount: needamt,
      percent: needp
     },
    {
       headers: {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
       },
     }
     ).then(() => {
     console.log("IT WORKED");
   });
    this.setState({Need_Amount:needamt}) //update need amount value
    this.setState({Need_Percent:needp}) //update need percent value
    var wantamt = document.getElementById("wantamt").innerHTML;
    var wantp = document.getElementById("want-percent").innerHTML;
    axios.post("http://localhost:4990/wants",
    {
      amount: wantamt,
      percent: wantp
     },
    {
       headers: {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
       },
     }
     ).then(() => {
     console.log("IT WORKED");
   });
    this.setState({Want_Amount:wantamt}) //update want amount value
    this.setState({Want_Percent:wantp}) //update want percent value
    var savingamt = document.getElementById("savingamt").innerHTML;
    var savingp = document.getElementById("saving-percent").innerHTML;
    axios.post("http://localhost:4990/savings",
    {
      amount: savingamt,
      percent: savingp
     },
    {
       headers: {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
       },
     }
     ).then(() => {
     console.log("IT WORKED");
   });
    this.setState({Saving_Amount:savingamt}) //update saving amount value
    this.setState({Saving_Percent:savingp}) //update saving percent value
    this.setState({Need_Remaining: needamt, Want_Remaining: wantamt})
   // var counter = document.getElementById("counter").innerHTML; 
    //this.setState({Budget_Available:counter});//update budget available value
  }

  minusamt = ()=>{
    this.minusfunction(); //call minus function to subtract budget balance by iinput value
    var value = document.getElementById("amt1").innerHTML;
    this.setState({Balance:value}) //update balance value
    axios.post("http://localhost:4990/budget",
    {
      amount: value
     },
    {
       headers: {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
       },
     }
     ).then(() => {
     console.log("IT WORKED");
   });
    var needamt = document.getElementById("needamt").innerHTML;
    var needp = document.getElementById("need-percent").innerHTML;
    axios.post("http://localhost:4990/needs",
    {
      amount: needamt,
      percent: needp
     },
    {
       headers: {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
       },
     }
     ).then(() => {
     console.log("IT WORKED");
   });
    this.setState({Need_Amount:needamt}) //update need amount value
    this.setState({Need_Percent:needp})//update need percent value
    var wantamt = document.getElementById("wantamt").innerHTML;
    var wantp = document.getElementById("want-percent").innerHTML;
    axios.post("http://localhost:4990/wants",
    {
      amount: wantamt,
      percent: wantp
     },
    {
       headers: {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
       },
     }
     ).then(() => {
     console.log("IT WORKED");
   });
    this.setState({Want_Amount:wantamt}) //update want amount value
    this.setState({Want_Percent:wantp}) //update want percent value
    var savingamt = document.getElementById("savingamt").innerHTML;
    var savingp = document.getElementById("saving-percent").innerHTML;
    axios.post("http://localhost:4990/savings",
    {
      amount: savingamt,
      percent: savingp
     },
    {
       headers: {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
       },
     }
     ).then(() => {
     console.log("IT WORKED");
   });
    this.setState({Saving_Amount:savingamt}) //update saving amount value
    this.setState({Saving_Percent:savingp}) //update saving percent value
    this.setState({Need_Remaining: needamt, Want_Remaining: wantamt})
      //  var counter = document.getElementById("counter").innerHTML; 
  //  this.setState({Budget_Available:counter});//update budget available value
  }

  clearamt = ()=>{
    this.clearfunction(); //call clear function to set all the value to zero 
    var amt = document.getElementById("amt1").innerHTML;
    var needamt = document.getElementById("needamt").innerHTML;
    var wantamt = document.getElementById("wantamt").innerHTML;
    var savingamt = document.getElementById("savingamt").innerHTML;
    var needp = document.getElementById("need-percent").innerHTML;
    var wantp = document.getElementById("want-percent").innerHTML;
    var savingp = document.getElementById("saving-percent").innerHTML
    this.setState({Balance:amt})    //update all state objects value in the homepage to zero 
    this.setState({Need_Amount:needamt})
    this.setState({Want_Amount:wantamt})
    this.setState({Saving_Amount:savingamt})
    this.setState({Need_Percent:needp})
    this.setState({Want_Percent:wantp})
    this.setState({Saving_Percent:savingp})
    this.setState({Need_Remaining: needamt, Want_Remaining: wantamt})////////////////////////////////////////////
     //   var counter = document.getElementById("counter").innerHTML; 
  //  this.setState({Budget_Available:counter});//update budget available value
  }

  needdelete= ()=>{   //need box delete function 
    this.needresetfunction();
    var needamt = document.getElementById("needamt").innerHTML;
    var needp = document.getElementById("need-percent").innerHTML;
    this.setState({Need_Amount:needamt})
    this.setState({Need_Percent:needp})
    this.setState({Need_Remaining: needamt})
     //   var counter = document.getElementById("counter").innerHTML; 
   // this.setState({Budget_Available:counter});//update budget available value
  }

  needenter= ()=>{ //need box enter function
    this.needsfunction();
    var needamt = document.getElementById("needamt").innerHTML;
    var needp = document.getElementById("need-percent").innerHTML;
    axios.post("http://localhost:4990/needs",
    {
      amount: needamt,
      percent: needp
     },
    {
       headers: {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
       },
     }
     ).then(() => {
     console.log("IT WORKED");
   });
    this.setState({Need_Amount:needamt})
    this.setState({Need_Percent:needp})
    this.setState({Need_Remaining: needamt})
      //  var counter = document.getElementById("counter").innerHTML; 
  //  this.setState({Budget_Available:counter});//update budget available value
  }

  wantdelete= ()=>{ //want box delete function
    this.wantresetfunction();
    var wantamt = document.getElementById("wantamt").innerHTML;
    var wantp = document.getElementById("want-percent").innerHTML;
    this.setState({Want_Amount:wantamt})
    this.setState({Want_Percent:wantp})
    this.setState({Want_Remaining: wantamt})
      //  var counter = document.getElementById("counter").innerHTML; 
  //  this.setState({Budget_Available:counter});//update budget available value
  }

  wantenter= ()=>{ //want box enter function
    this.wantsfunction();
    var wantamt = document.getElementById("wantamt").innerHTML;
    var wantp = document.getElementById("want-percent").innerHTML;
    axios.post("http://localhost:4990/wants",
    {
      amount: wantamt,
      percent: wantp
     },
    {
       headers: {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
       },
     }
     ).then(() => {
     console.log("IT WORKED");
   });
    this.setState({Want_Amount:wantamt})
    this.setState({Want_Percent:wantp})
    this.setState({Want_Remaining: wantamt})
     //   var counter = document.getElementById("counter").innerHTML; 
   // this.setState({Budget_Available:counter});//update budget available value
  }

  savingdelete= ()=>{ //saving box delete function
    this.savingresetfunction();
    var savingamt = document.getElementById("savingamt").innerHTML;
    var savingp = document.getElementById("saving-percent").innerHTML;
    this.setState({Saving_Amount:savingamt})
    this.setState({Saving_Percent:savingp})
      //  var counter = document.getElementById("counter").innerHTML; 
   // this.setState({Budget_Available:counter});//update budget available value
  }

  savingenter= ()=>{ //saving box enter function
    this.savingsfunction();
    let savingamt = document.getElementById("savingamt").innerHTML;
    var savingp = document.getElementById("saving-percent").innerHTML;
    axios.post("http://localhost:4990/savings",
    {
      amount: savingamt,
      percent: savingp
     },
    {
       headers: {
         accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
       },
     }
     ).then(() => {
     console.log("IT WORKED");
   });
    this.setState({Saving_Amount:savingamt})
    this.setState({Saving_Percent:savingp})
      //  var counter = document.getElementById("counter").innerHTML; 
   // this.setState({Budget_Available:counter});//update budget available value
  }

  changePage = ()=>{ //change page button function to change page 
    this.planfunction();
    var savingamt = document.getElementById("savingamt").innerHTML;
    var savingp = document.getElementById("saving-percent").innerHTML;
    var balance = document.getElementById("amt1").innerHTML;
        //var counter = document.getElementById("counter").innerHTML; 
   // this.setState({Budget_Available:counter});//update budget available value
   if(balance<=0){
     alert("Budget Balance cannot be zero")
   }else{
    this.setState({Saving_Amount:savingamt})
    this.setState({Saving_Percent:savingp})
    var value = !this.state.display;
    this.setState({display:value})

    var N_amt = this.state.Need_Amount;
    var W_amt = this.state.Want_Amount;
    // this.setState({Need_Remaining: N_amt, Want_Remaining: W_amt})
  }
}
  PlanchangePage = ()=>{
    var value = !this.state.display;
    this.setState({display:value}) ;
    this.setState({monthBudget:0});
  }

  //Add helper function
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
//Minus button helper function
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
//clear button helper function
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

//Need box value helper function
needsfunction(){
    let balance = document.getElementById("amt1").innerHTML;    /*x is Budget balance value*/
    let input = document.getElementById("needinput").value; /*n is need box input value*/
    let counter=document.getElementById("counter").innerHTML; /*m is a counter for budget left value*/
    let percent = document.getElementById("need-percent").innerHTML; /*y is need percentage value*/
    if(input<0 || balance===0 || input===""){   /*check for if the input value is negative or budget balance is zero or need box input is empty */
        alert("the input cannot be negative or the input cannot be empty")
    }else if((counter-input)<0 &&(((counter-0)+(percent-0))-input)<0){ /*check if counter value minus need box input value is less than zero or counter value add need percentage then minus need input value is less than zero*/
        alert("the budget percent input is too big");
    }
    else{
      counter=counter-input;
      percent=Number(percent)+Number(input);
      let amount = (balance*(percent/100)).toFixed(2);
      if(counter<0){
      alert("There's not enough budget to add");
      }else{
  document.getElementById("counter").innerHTML=counter.toFixed(2);
  document.getElementById("needamt").innerHTML=amount;
  document.getElementById("need-percent").innerHTML=percent;
      }

    }
} 
//Want box value helper function
wantsfunction(){
    let balance = document.getElementById("amt1").innerHTML;
    let input = document.getElementById("wantinput").value;
    let counter=document.getElementById("counter").innerHTML;
    let percent = document.getElementById("want-percent").innerHTML;
    if(input<0 || balance==0 || input==""){   /*check for negative input*/
        alert("the input cannot be negative or the input cannot be empty")
    }else if((counter-input)<0 &&(((counter-0)+(percent-0))-input)<0){
        alert("the budget percent input is too big");
    }
    else{
        counter=counter-input;
        percent=Number(percent)+Number(input);
        let amount = (balance*(percent/100)).toFixed(2);
        if(counter<0){
        alert("There's not enough budget to add");
        }else{
    document.getElementById("counter").innerHTML=counter.toFixed(2);
    document.getElementById("wantamt").innerHTML=amount;
    document.getElementById("want-percent").innerHTML=percent;
        }

    }
} 
//Saving box helper function
savingsfunction(){
 let balance = document.getElementById("amt1").innerHTML;    /*x is Budget balance value*/
  let input = document.getElementById("savinginput").value; /*n is need box input value*/
  let counter=document.getElementById("counter").innerHTML; /*m is a counter for budget left value*/
  let percent = document.getElementById("saving-percent").innerHTML; /*y is need percentage value*/
  if(input<0 || balance===0 || input===""){   /*check for if the input value is negative or budget balance is zero or need box input is empty */
      alert("the input cannot be negative or the input cannot be empty")
  }else if((counter-input)<0 &&(((counter-0)+(percent-0))-input)<0){ /*check if counter value minus need box input value is less than zero or counter value add need percentage then minus need input value is less than zero*/
      alert("the budget percent input is too big");
  }
  else{
    counter=counter-input;
    percent=Number(percent)+Number(input);
    if(counter<0){
    alert("There's not enough budget to add");
    }else{
document.getElementById("counter").innerHTML=counter.toFixed(2);
document.getElementById("savingamt").innerHTML=(balance*(percent/100)).toFixed(2);
document.getElementById("saving-percent").innerHTML=percent;
    }

  }
}
  //need box reset button function
    needresetfunction(){
        let x = document.getElementById("need-percent").innerHTML;
        let y = document.getElementById("counter").innerHTML;
        document.getElementById("need-percent").innerHTML=0;
        document.getElementById("needamt").innerHTML=(0).toFixed(2);
        document.getElementById("needinput").value="";
        document.getElementById("counter").innerHTML=((x-0)+(y-0)).toFixed(2);
    } 
    //want box reset button function
    wantresetfunction(){
        let x = document.getElementById("want-percent").innerHTML;
        let y = document.getElementById("counter").innerHTML;
        document.getElementById("want-percent").innerHTML=0;
        document.getElementById("wantamt").innerHTML=(0).toFixed(2);
        document.getElementById("wantinput").value="";
        document.getElementById("counter").innerHTML=((x-0)+(y-0)).toFixed(2);
    }
    //saving box reset button function
    savingresetfunction(){
        let x = document.getElementById("saving-percent").innerHTML;
        let y = document.getElementById("counter").innerHTML;
        document.getElementById("saving-percent").innerHTML=0;
        document.getElementById("savingamt").innerHTML=(0).toFixed(2);
        document.getElementById("savinginput").value="";
        document.getElementById("counter").innerHTML=((x-0)+(y-0)).toFixed(2);
    }
    //to go to planning page button function and move all remaining budget percentage to saving box if there are unallocated budget before go-to planning page 
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
    
    
    let newObject = {Name: this.state.input_Name, Price: Number(this.state.input_Price).toFixed(2)};
    var copy_array = [];
    var duplicate_index_W = this.checkDuplicate(newObject.Name, 0);// return -1 if no duplicate
    var duplicate_index_N = this.checkDuplicate(newObject.Name, 1);// return -1 if no duplicate 

    //follwing will reset input field if over budget amount
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

      if(this.state.Need_Remaining - this.state.input_Price < 0)//check if thFe prices over the budgets
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
      //add to wants api, the variable names for wants table are "itemname" and "price"
      axios.post("http://localhost:4990/want_list",
       {
         itemname: this.state.input_Name, 
         price: this.state.input_Price
        },
       {
          headers: {
            accessToken: localStorage.getItem("accessToken"),  // new item will only be added to database when user is logged in
          },
        }
        ).then(() => {
        console.log("IT WORKED");
      });

      //post new remain amount of wants to Wremain table, want_remain api
      axios.post("http://localhost:4990/want_remain",
      {
        amount: this.state.Want_Remaining - this.state.input_Price
      },
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
        },
      }
      ).then(() => {
          console.log("IT WORKED");
      });
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
      //add to needs api, the variable names for needs table are "itemname" and "price"
      axios.post("http://localhost:4990/need_list", 
      {
        itemname: this.state.input_Name,
        price: this.state.input_Price
      },
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"), // new item will only be added to database when user is logged in
        },
      }
      ).then(() => {
            console.log("IT WORKED");
          });
      
    //post new remain amount of needs to Nremain table, need_remain api
      axios.post("http://localhost:4990/need_remain",
      {
        amount: this.state.Need_Remaining - this.state.input_Price
      },
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),  // new saving amount will only be added to database when user is logged in
        },
      }
      ).then(() => {
          console.log("IT WORKED");
      });
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
    console.log("delete item: Object Name: %s, ClassName: %s", Object_Name, ClassName)
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
          this.setState({wantList_Items: copy_array, Want_Remaining: (Number(remain) + Number(x))});
          axios.delete(`http://localhost:4990/want_list/${Object_Name}`, 
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"), // only the person who logged in can delete item from databases
            },
          }).then(() => {
            console.log("IT WORKED");
        }).catch((err) => {
          console.log(err)
          alert(err);
        });  
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
          this.setState({NeedList_Items: copy_array, Need_Remaining: (Number(remain) + Number(x))});   
          axios.delete(`http://localhost:4990/need_list/${Object_Name}`, 
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"), // only the person who logged in can delete item from databases
            },
          }).then(() => {
            console.log("IT WORKED");
        }).catch((err) => {
          console.log(err)
          alert(err);
        });  
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
   if (localStorage.getItem("accessToken") == null) {
      alert("Please login to unlock more features (๑˃́ꇴ˂̀๑)")
    } else {
    var d = new Date();
    var n = d.getMonth();
    var value = !this.state.Hdisplay;
    this.setState({Hdisplay:value}) //update the state object to change page
    var need_spend = this.state.Balance *(this.state.Need_Percent/100) - this.state.Need_Remaining;
    var save = this.state.Saving_Amount;
    var want_spend = this.state.Balance *(this.state.Want_Percent/100) - this.state.Want_Remaining;
    var data = this.state.chartData;
    data.datasets[0].data[n]=need_spend;//set the need spending to the current month state array for bar graph 
    data.datasets[1].data[n]=want_spend;//set the want spending to the current month state array for bar graph
    data.datasets[2].data[n]=save;//set the saving value to the current month state array for bar graph
    this.setState({chartData:data}) //update the bar graph state object with the inserted data
    var data2 = this.state.historyData; // data for statistics section
    var total_spending = need_spend + want_spend;
    var remain_budget = (this.state.Need_Remaining-0) + (this.state.Want_Remaining-0);
    var total_saving = (save-0) + (remain_budget-0);
    data2[n].total_spending=total_spending; //set total spending value on the current month 
    data2[n].total_saving=total_saving; //set total saving value on the current month 
    data2[n].Remaining_budget=remain_budget; //set remaining budget value on the current month
    this.setState({historyData:data2}); //update the statistics data with the new data inserted 
    this.setState({monthSelect:0}); // set the select month to January as default 
    }
 }

  PickMonth=(e) => {                    //use for determine which month the user select 
    const selectedmonth = e.target.value;
    if(selectedmonth ==="Jan"){
      this.setState({monthSelect:0})
    }else if(selectedmonth ==="Feb"){
      this.setState({monthSelect:1})
    }else if(selectedmonth ==="Mar"){
      this.setState({monthSelect:2})
    }else if(selectedmonth ==="Apr"){
      this.setState({monthSelect:3})
    }else if(selectedmonth ==="May"){
      this.setState({monthSelect:4})
    }else if(selectedmonth ==="Jun"){
      this.setState({monthSelect:5})
    }else if(selectedmonth ==="Jul"){
      this.setState({monthSelect:6})
    }else if(selectedmonth ==="Aug"){
      this.setState({monthSelect:7})
    }else if(selectedmonth ==="Sep"){
      this.setState({monthSelect:8})
    }else if(selectedmonth ==="Oct"){
      this.setState({monthSelect:9})
    }else if(selectedmonth ==="Nov"){
      this.setState({monthSelect:10})
    }else if(selectedmonth ==="Dec"){
      this.setState({monthSelect:11})
    }
  }

  /**************************************************************************** */

  render(){
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var year = d.getFullYear();
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
                                              
                                              />;
    }else if(this.state.display===true && this.state.Hdisplay===true){
      display_Component =<HistoryPage chartData={this.state.chartData}
                                       historyData={this.state.historyData}
                                       monthSelect={this.state.monthSelect}
                                       PickMonth={this.PickMonth}
                                       HisChange={this.HisChange}
                                       />
    }
    return (
        <div>
        <Navigation/>
        {display_Component}
        </div>
      )
  }
  
}

export default App;
