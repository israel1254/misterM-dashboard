import React, { Component } from "react";
import Chart from "react-apexcharts";

class SelesFunnelAreaChart extends Component {
  
  constructor(props) {
    super(props);
    const value=[40,40,60,80,100];
    const value2=[]
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          dropShadow: {
            enabled: true,
            color: '#6E39CB03',
            top: 25,
            left: 7,
            blur: 10,
            opacity: 0.3
          },
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        // scales:{
        //   y:{
        //     beginAtzero:true,
        //     ticks:{
        //       Callback: function(value,indax,values){
        //         if(indax === 7){
        //           return target;

        //         }
        //         else{
        //           return `${value} and ${datapoints[7]}`
        //         }
        //       }
        //     }
        //   }
        // },
        yaxis: {
          min:30,
          max:100,
          tickAmount: 4,
          
          labels: {
            
            formatter: function (value) {
              return value  + "K";
            }
          },
        },
        xaxis: {
          labels:{
            style:{
              fontSize:"14px",
              padding:"20px"
            }
          },

          tickAmount: 16,
          // tickPlacement: 'between',
          
          categories: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
          
        },
        title: {
          text: 'Seles Funnel',
          align: 'left'
        },
        
        legend: {
          horizontalAlign: 'right',
          position:'top',
          style:{
            paddingTop:'0'
          }
        },
        stroke: {
          curve: 'straight',
          // OR provide an array
          // curve: ['straight', 'smooth', 'monotoneCubic', 'stepline']
        },
        
        markers: {
          colors: ['#6E39CB03']
       }
       
        
      },
      series: [
        {
          name: "series",
          data: [40,40,60,40,57,55,80,42,45,70,65,45,50,60,60,60],
        },
        
      ],
    
    };
  }

  render() {
    return (
      <div className="appchart" style={{paddingTop:"20px",width:"100%"}}>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="100%"
              height="330"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SelesFunnelAreaChart;
