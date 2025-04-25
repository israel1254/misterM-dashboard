import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '10',
    uv: 10,
    pv: '10 to 15',
    amt: 2400,
  },
  {
    name: '20',
    uv: '10',
    pv: '15 to 20',
    amt: 2210,
  },
  {
    name: '30',
    uv: 25,
    pv: '20 to 25',
    amt: 2290,
  },
  {
    name: '40',
    uv: 2780,
    pv: '25 to 30',
    amt: 2000,
  },
  {
    name: '50',
    uv: 1890,
    pv: '30 to 35',
    amt: 2181,
  },
  {
    name: '60',
    uv: 2390,
    pv: '35 t0 40',
    amt: 2500,
  },
  {
    name: '70',
    // uv: 3490,
    // pv: '10 to 15',
    // amt: 2100,
  },
  {
    name: '80',
    // uv: 3490,
    // pv: 0,
    // amt: 2100,
  },
  {
    name: '90',
    // uv: 3490,
    // pv: 0,
    // amt: 2100,
  },
  {
    name: '100',
    // uv: 3490,
    // pv: 0,
    // amt: 2100,
  },
  {
    name: '200',
    // uv: 3490,
    // pv: 0,
    // amt: 2100,
  },
  {
    name: '300',
    // uv: 3490,
    // pv: 0,
    // amt: 2100,
  },
  {
    name: '400',
    // uv: 3490,
    // pv: 0,
    // amt: 2100,
  },
  {
    name: '500',
    // uv: 3490,
    // pv: 0,
    // amt: 2100,
  },
];

const FolowersLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <LineChart width={300} height={100} data={data} >
        <CartesianGrid  vertical={false}/>
        <XAxis dataKey="name"  padding={{ left: 30, right: 30 }} tickLine={false} axisLine={false}/>
        <YAxis  tickCount={6} dataKey='pv' type="category" scale="" axisLine={false} tickLine={false}/>
      <Line type="monotone" dataKey="pv" dot={false} stroke="#8884d8" strokeWidth={4} />
    </LineChart>
  </ResponsiveContainer>
  )
}

export default FolowersLineChart

