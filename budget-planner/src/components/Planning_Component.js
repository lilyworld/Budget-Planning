import React, { Component } from 'react';
import SavingList from './SavingList';
import Total_budgetBar from './Total_BudgetBar';
import InputBoxes_Component from './InputBoxes_Component';
import WantList_Component from './WantList_Component';
import NeedList_Component from './NeedList_Component';

function Planning_Component(Props){
    
  return (
  <div  className = "PApp">
  <Total_budgetBar Total_Amount = {Props.Balance}/>
  <InputBoxes_Component input_Name = {Props.input_Name} 
  input_Price = {Props.input_Price}
  selectType = {Props.selectType}
  handleNameInput = {Props.handleNameInput}
  handlePriceInput = {Props.handlePriceInput}
  handleSelectChange = {Props.handleSelectChange}
  resetInput = {Props.resetInput}
  add = {Props.add}
  />

  <WantList_Component Want_Amount = {Props.Want_Amount}
  Want_Remaining = {Props.Want_Remaining}
  want_Percent = {Props.want_Percent}
  wantList_Items = {Props.wantList_Items}
  delete_item = {Props.delete_item}
  resetItems = {Props.resetItems}
  />

  <NeedList_Component Need_Amount = {Props.Need_Amount}
  Need_Remaining = {Props.Need_Remaining}
  Need_Percent = {Props.Need_Percent}
  needList_Items = {Props.needList_Items}
  delete_item = {Props.delete_item}
  resetItems = {Props.resetItems}
  />

  <SavingList Precent = {Props.Saving_Percent} Amount = {Props.Saving_Amount}/>
  <button onClick={Props.PlanchangePage} id="bt1">Go to Home</button>
  </div>);
  }

  export default Planning_Component;