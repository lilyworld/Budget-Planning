import React, { Component } from 'react';


class ClassClick extends Component {
    addfunction(){
        let y = document.getElementById("amt1").innerHTML;
        let x = document.getElementById("input1").value;
        if(x<0 ||x==""){
            alert("the value cannot be negative or the input cannot be empty")
        }
        else{
        let z = (x-0)+(y-0);
        document.getElementById("amt1").innerHTML=z.toFixed(2);
        document.getElementById("input1").value="";
        document.getElementById("needamt").innerHTML="0.00"
        document.getElementById("wantamt").innerHTML="0.00"
        document.getElementById("savingamt").innerHTML="0.00"
        document.getElementById("need-percent").innerHTML="0"
        document.getElementById("want-percent").innerHTML="0"
        document.getElementById("saving-percent").innerHTML="0"
        document.getElementById("counter").innerHTML="100"
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
        document.getElementById("needamt").innerHTML="0.00"
        document.getElementById("wantamt").innerHTML="0.00"
        document.getElementById("savingamt").innerHTML="0.00"
        document.getElementById("need-percent").innerHTML="0"
        document.getElementById("want-percent").innerHTML="0"
        document.getElementById("saving-percent").innerHTML="0"
        document.getElementById("counter").innerHTML="100"
        }
    }
    }
    clearfunction(){
        document.getElementById("amt1").innerHTML="0.00"
        document.getElementById("needamt").innerHTML="0.00"
        document.getElementById("wantamt").innerHTML="0.00"
        document.getElementById("savingamt").innerHTML="0.00"
        document.getElementById("need-percent").innerHTML="0"
        document.getElementById("want-percent").innerHTML="0"
        document.getElementById("saving-percent").innerHTML="0"
        document.getElementById("counter").innerHTML="100"
    }
    render() { 
        return ( 
            <div>
<h1 >Budget Balance:$<span id="amt1">0.00</span></h1>
<button onClick={this.minusfunction} id="minus1">-</button>
<input type="number" id="input1" placeholder="Enter Budget Amount" min="0"></input>
<button onClick={this.addfunction} id="add1">+</button>
<br></br>
<button onClick={this.clearfunction} id="clear1">Clear</button>
</div>
         );
    }
}
 
export default ClassClick;