import React,{Component} from 'react';

function WantList_Component(Props){  
    return (<div id="WantList_Container">
    <h3>Wants List:(currently {Props.want_Percent}%) </h3>
    <div id = "Want_Remaining_Budget">*Remaining Budget: ${Props.Want_Remaining}</div>
    <ul  id = "Want_List">
      {Props.wantList_Items.map(
        (Item)=> <li key = {Item.Name}> <span id="IN">{Item.Name}:</span> ${Item.Price}
          <button type = "button" id = {Item.Name} className = "Want" onClick = {Props.delete_item}>
          X
          </button> </li>
      )}
    </ul>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br/><br/><br/>
    <button name= "reset_button" type = "reset" id = "WantList_Reset" onClick = {Props.resetItems}>Reset</button>
    </div>);
}
export default WantList_Component;