import React, { Component } from 'react';

class BudgetBox extends Component {
    needsfunction(){
        let x = document.getElementById("amt1").innerHTML;
        let n = document.getElementById("needinput").value;
        let m=document.getElementById("counter").innerHTML;
        let y = document.getElementById("need-percent").innerHTML;
        if(n<0 || x==0 || n==""){   /*check for negative input*/
            alert("the input cannot be negative or total budget is zero")
        }else if((m-n)<0 &&(((m-0)+(y-0))-n)<0){
            alert("the budget percent input is too big");
        }
        else{
            m=(m-0)+(y-0)
            m=m-n;
        document.getElementById("counter").innerHTML=m.toFixed(2);
        document.getElementById("needamt").innerHTML=(x*(n/100)).toFixed(2);
        document.getElementById("need-percent").innerHTML=(n-0)-0;

        }
    } 

    wantsfunction(){
        let x = document.getElementById("amt1").innerHTML;
        let n = document.getElementById("wantinput").value;
        let m=document.getElementById("counter").innerHTML;
        let y = document.getElementById("want-percent").innerHTML;
        if(n<0 || x==0 || n==""){   /*check for negative input*/
            alert("the input cannot be negative or total budget is zero")
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
            alert("the input cannot be negative or total budget is zero")
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
    render() {
        return ( 
            <div>
            <p id="p1">Needs
            <br></br>
            <p>Budget:<span id="need-percent">50</span>%</p>
            <p>Amount:$<span id="needamt">0.00</span></p>
            <input id="needinput" type="number" placeholder="Budget Percentage"></input>%
            <br></br>
            <button onClick={this.needsfunction}>Enter</button>
            </p>

            <p id="p1">Wants
            <br></br>
            <p>Budget:<span id="want-percent">30</span>%</p>
            <p>Amount:$<span id="wantamt">0.00</span></p>
            <input id="wantinput" type="number" placeholder="Budget Percentage"></input>%
            <button onClick={this.wantsfunction}>Enter</button>
            </p>

            <p id="p1">Savings
            <br></br>
            <p>Budget:<span id="saving-percent">20</span>%</p>
            <p>Amount:$<span id="savingamt">0.00</span></p>
            <input id="savinginput" type="number" placeholder="Budget Percentage"></input>%
            <button onClick={this.savingsfunction}>Enter</button>
            </p>
            <h2>Budget Left:<span id="counter">0</span>%</h2>
            <button>Go to Planning</button>
            </div>
         );
    }
}
 
export default BudgetBox;