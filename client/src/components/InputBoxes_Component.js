import React,{Component} from 'react';

function InputBoxes_Component(Props){
    
    let handleNameChange = (e) =>{
        Props.handleNameInput(e.target.value);
        return;
    }//interestingly, in function component, method need to name a type, and we dont use this for referening the owner object

    let handlePriceChange = (e)=>{
        Props.handlePriceInput(e.target.value);
        return;
    }

    let handleSelectChange = (e)=>{
        Props.handleSelectChange(e.target.value);
        return;
    }

    return(
    <div id = "addinput">
        <input type = "text" id = "NameTextBox" placeholder = "Item Name" value = {Props.input_Name} onChange = {handleNameChange} maxLength="15"/>
        <input type = "number" id = "PriceBox" placeholder= "Price" value = {Props.input_Price} onChange = {handlePriceChange}/>      
        <select value = {Props.selectType} id="picktype" onChange = {handleSelectChange}>
            <option value="Select a type">Select a type</option>
            <option value = "Want" id = "WantRadio">Want</option>
            <option value = "Need" id = "NeedRadio" name = "Item Type">Need</option>
        </select>
        <button className = "ADDInputButton" id = "AddInput_Add_to_list" onClick = {Props.add}>Add to list </button>
    
    </div>);
}

export default InputBoxes_Component;
