import React, { Component } from 'react';
import {Bar,Doughnut} from "react-chartjs-2"

function HistoryPage(Props){
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var year = d.getFullYear();
    return(
        <div className="HApp">
        <div className="historyHeader">
        <h1>History Page</h1>
        <h3 id="current_date">Current Date:{month}/{day}/{year}</h3>
        
        </div>
        <div className="bar">
        <Bar data={Props.chartData}
        
        options={{
                 scales:{
            y:{
              title:{
                display:true,
                text:"Expenses"
              }
            },
            x:{
              title:{
                display:true,
                text:"Months"
              }
            }
          },
          animation: {duration:0}//animation disable
        }}
        />
        </div>
      <br/>
        <div className = "historyPie">
                  <Doughnut data={{
                  labels:["Total spending", "Total saving", "Remaining budget"],
                   datasets:[{
                   label:"Needs",
                   data:[Props.historyData[Props.monthSelect].total_spending, Props.historyData[Props.monthSelect].total_saving, Props.historyData[Props.monthSelect].Remaining_budget],//interestingly, the JSX expression in here do not need to wrapped by {}
                   backgroundColor:["rgba(62,237,231,0.9)","rgba(255,179,167,0.9)", "rgba(164,226,198,0.9)"]
                    }]
                    }}

                    options={{
                    maintainAspectRatio:false,
                    animation: {duration:0}//animation disable
                     }}
                    />  
                  </div>
        <h3 id="stat">Statistics</h3>
        <label for="month">Choose a month:</label>
        <select id="month" name="month"
        onChange={Props.PickMonth}
        >
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
        </select>
        <div className="HistoryBar">
        <h4>Total spending:${Props.historyData[Props.monthSelect].total_spending}</h4>
        <h4>Total saving:${Props.historyData[Props.monthSelect].total_saving}</h4>
        <h4>The remaining budget:${Props.historyData[Props.monthSelect].Remaining_budget}</h4>
      <button onClick={Props.HisChange} id="bt1">Go Back</button>
      </div>
      </div>
    )
}

export default HistoryPage;