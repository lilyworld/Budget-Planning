import React, { Component } from 'react';


function Navigation_bar(Pros){
    return (
      <ul id = "navigation_bar">
              <li className= "navigation_item">	
                  <a href="">Home</a>
              </li>
              <li className= "navigation_item">
                  <a href="">Service information</a>
              </li>
              <li className= "navigation_item">
                  <a href="">Contact us</a>
              </li>
          </ul>
    );
  }

  export default Navigation_bar