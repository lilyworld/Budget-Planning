import React, { Component } from 'react';

class BudgetBox extends Component {
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
    render() {
        return ( 
            <div>
            <p id="p1">Needs
            <br></br>
            <p>Budget:<span id="need-percent">50</span>%</p>
            <p>Amount:$<span id="needamt">0.00</span></p>
            <input id="needinput" type="number" placeholder="Budget Percentage"></input>%
            <br></br>
            <button onClick={this.needresetfunction} id="bt">Reset</button>
            <button onClick={this.needsfunction} id="bt">Enter</button>
            </p>

            <p id="p1">Wants
            <br></br>
            <p>Budget:<span id="want-percent">30</span>%</p>
            <p>Amount:$<span id="wantamt">0.00</span></p>
            <input id="wantinput" type="number" placeholder="Budget Percentage"></input>%
            <button onClick={this.wantresetfunction} id="bt">Reset</button>
            <button onClick={this.wantsfunction} id="bt">Enter</button>
            </p>

            <p id="p1">Savings
            <br></br>
            <p>Budget:<span id="saving-percent">20</span>%</p>
            <p>Amount:$<span id="savingamt">0.00</span></p>
            <input id="savinginput" type="number" placeholder="Budget Percentage"></input>%
            <button onClick={this.savingresetfunction} id="bt">Reset</button>
            <button onClick={this.savingsfunction} id="bt">Enter</button>
            </p>
            <h2>Budget Available:<span id="counter">0</span>%</h2>
            <button id="bt1">Go to Planning</button>
            </div>
         );
    }
}
 
export default BudgetBox;