import React, { Component } from "react";
import Chart from "react-apexcharts";

class FolowersLineChart extends Component {
  
  constructor(props) {
    super(props);
    const value=[10,13,20,15,30,29,49,23,];
    const value2=[]
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          dropShadow: {
            enabled: true,
            color: '#000',
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
          min:10,
          max:40,
          tickAmount: 5,
          
          labels: {
            
            formatter: function (value) {
              return value + " " + "to" + " " + (value+5);
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
          tickPlacement: 'between',
          
          categories: [10, 20, 30, 40, 50, 60, 70, 80, 90,100,200,300,400,500],
          
        },
        title: {
          text: 'Seles by Age',
          align: 'left'
        },
        
        legend: {
          horizontalAlign: 'right',
          position:'top'
        },
        stroke: {
          curve: 'smooth',
          // OR provide an array
          // curve: ['straight', 'smooth', 'monotoneCubic', 'stepline']
        }
        
      },
      series: [
        {
          name: "series-1",
          data: [0,25,20,35,27,39,25,27,20,21,28,10],
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
              type="line"
              width="97%"
              height="330"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FolowersLineChart;





// fill: {
//   colors: [function({ value, seriesIndex, w }) {
//     if(value < 55) {
//         return '#7E36AF'
//     } else if (value >= 55 && value < 80) {
//         return '#164666'
//     } else {
//         return '#D9534F'
//     }
//   }]
// }