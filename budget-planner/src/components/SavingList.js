import React, { Component } from 'react';

function SavingList(props){
      return ( 
        <div id = "SavingList">
              <h3> Your saving(currenly {props.Precent}%)</h3>
              <ul id = "SList">
                  <li className = 'SList_Items'>New saving: $ {props.Amount}</li>
              </ul>
          </div>
      );
  }

export default SavingList