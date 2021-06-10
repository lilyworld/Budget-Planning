function addfunction(){
    var y = document.getElementById("bhead1").innerHTML;
    var x = document.getElementById("quantity").value;
    if(x<0){
        alert("The input cannot be negative!")
    }else{
    var z = (x-0)+(y-0);
    document.getElementById("bhead1").innerHTML=z.toFixed(2);
    }
}

function minusfunction(){
    var y = document.getElementById("bhead1").innerHTML;
    var x = document.getElementById("quantity").value;
    if(x<0){
        alert("The input cannot be negative!")
    }else{
    if(y-x < 0){
        alert("The input budget exceeded the current budget!")
    }else{
    var z = y-x;
    document.getElementById("bhead1").innerHTML=z.toFixed(2);
    }
}
}

function clearfunction(){
    document.getElementById("bhead1").innerHTML="0.00";
}