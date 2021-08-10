import React,{Component} from 'react';

function WantList_Component(Props){  
  const icon = <FontAwesomeIcon icon = {faTrash} className = "myIcons"/>;
    return (<div id="WantList_Container">
    <h3>Wants List:(currently {Props.want_Percent}%) </h3>
    <div id = "Want_Remaining_Budget">*Remaining Budget: ${Props.Want_Remaining}</div>
    <ul  id = "Want_List">
      {Props.wantList_Items.map(
        (Item)=> <li key = {Item.Name}> <span id="IN">{Item.Name}:</span> ${Item.Price}
          <button type = "button" id = {Item.Name} className = "Want" onClick = {Props.delete_item}>
          {icon}
          </button> </li>
      )}
    </ul>
 
    </div>);
}
export default WantList_Component;