import React, { Component } from 'react';

function SavingList(props){
      return ( 
        <div id = "SavingList">
              <h3> Your saving(currenly {props.Precent}%)</h3>
              <ul id = "SList">
                  <li>Previous Saving: $0</li>
                  <li>New saving: $ {props.Amount}</li>
              </ul>
          </div>
      );
  }

export default SavingList