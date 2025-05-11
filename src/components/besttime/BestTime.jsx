//  import React from 'react'
 
//  const  = () => {
//    return (
//      <div>BestTime</div>
//    )
//  }
 
//  export default BestTime

import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class BestTime extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-customized-event-mmwz85';

  state = {
    data: [
      {
        name: 'Page A',
        uv: 30,
        pv: "Mon",
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 10,
        pv: "Tue",
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 20,
        pv: "Wed",
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 15,
        pv: "Thu",
        amt: 2000,
      },
     
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];

    return (
      <div style={{ width: '100%' ,height:'200'}}>
        
        <ResponsiveContainer width="100%" height={200} > 
        <h3 style={{paddingLeft:'30px',paddingBottom:'10px'}}>imprasstion</h3>
          <BarChart width="100%" height={200} data={data} >
            <YAxis tickCount={3}  axisLine={false} tickLine={false}   />
            <Tooltip />
            <CartesianGrid stroke="#ccc"  vertical={false}   />
            
            <XAxis dataKey="pv" tickLine={false}  scale="point" padding={{ left: 10, right: 10 }}/>
            <Bar dataKey="uv" onClick={this.handleClick} radius={8} barSize={25}>
              {data.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '#6E39CB' : '#D3BBFE'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      
      </div>
    );
  }
}
