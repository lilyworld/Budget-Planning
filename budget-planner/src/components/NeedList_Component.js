import React,{Component} from "react";


function NeedList_Component(Props){
    return <div id="NeedList_Container">
    <h3>Needs List:(currently {Props.Need_Percent}%) </h3>
    <div id = "Need_Remaining_Budget">*Remaining Budget: ${Props.Need_Remaining}</div>
    <ul id = "Need_List">
    {Props.needList_Items.map(
        (Item)=> <li key = {Item.Name}> <span id="IN">{Item.Name}:</span> ${Item.Price} 
            <button type = "button" id = {Item.Name} className = "Need" onClick = {Props.delete_item}>
            X
            </button></li>
    )}
    </ul>

  </div>
}

export default NeedList_Component;