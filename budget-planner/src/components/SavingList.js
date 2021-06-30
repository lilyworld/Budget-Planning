import React, { Component } from 'react';

class SavingList extends React.Component{
    render(){
      return ( 
        <div id = "SavingList">
              <h3> Your saving(currenly 20%)</h3>
              <ul id = "SList">
                  <li>Previous Saving: $0</li>
                  <li>New saving: $0</li>
              </ul>
          </div>
      );
    }
  }

export default SavingList