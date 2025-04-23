import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, CartesianAxis } from 'recharts';
const data = [{
   uv: 45,
    pv: 10, amt: 300},
  { uv: 165, pv: 90, amt: 300, },
  { uv: 45, pv: 90, amt: 300},
  { uv: 180, pv: 107, amt: 300},
  { uv: 95, pv: 60, amt: 300},
  { uv: 140, pv: 43, amt: 300},
  { uv: 138, pv: 66, amt: 300},
  { uv:  109, pv: 100, amt: 300},
  { uv: 105, pv: 98, amt: 300},
  { uv: 50, pv: 140, amt: 300},
 ];
 const tick =300;

// const renderBarChart = (
  
// ); 

import React from 'react'

const TransactionGraphBar = () => {
  return (
    <div>
      <BarChart width={550}  height={240} data={data} margin={{
            top: 30,
            right: 0,
            left: 0,
            bottom: 10,
          }}>
    <XAxis dataKey="name"  padding={{left:10,right:10}} tickLine={false}  stroke="#8884d8" strokeDasharray="5 5"/>
    <YAxis tickCount={3}  axisLine={false} tickLine={false}   />

    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    {/* <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} /> */}
    <CartesianGrid stroke="#ccc"  vertical={false} strokeDasharray="5 5"  />
  
    <Bar stackId='pv-uv' type='monotone'  dataKey="uv" fill="rgba(255, 255, 255, 1)" barSize={4} radius={50}/>
    <Bar stackId='pv-uv' dataKey="pv"  fill="rgba(110, 57, 203, 1)" barSize={4} activeDot={{r:8}} radius={50} maxBarSize={50} minPointSize={10} strokeWidth={2}/>
     
  </BarChart>
    </div>
  )
}

export default TransactionGraphBar