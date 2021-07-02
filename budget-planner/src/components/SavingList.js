import React, { Component } from 'react';

function SavingList(props){
    var new_saving = props.Precent * props.Total_Amount;
      return ( 
        <div id = "SavingList">
              <h3> Your saving(currenly {props.Precent}%)</h3>
              <ul id = "SList">
                  <li>Previous Saving: $0</li>
                  <li>New saving: $ {new_saving}</li>
              </ul>
          </div>
      );
  }

export default SavingList