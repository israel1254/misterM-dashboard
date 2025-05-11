import React from 'react'
import SelectActionCard from './AvailableToWithdraw';
import { Divider } from '@mui/material';


const card1= [{
    id: 1,
    title: 'Available to withdraw',
    progres:"10.0%",
    avalabelData:"$1,567.99",
    description: 'Wed, Jul 20',
  },

 {
    id: 2,
    title: 'Today Revenue',
    progres:"3.0%",
    avalabelData:"$2,868.99",
    description: '143 order',
  }
,
{
    id: 3,
    title: 'Today Sessions',
    progres:"3.2%",
    avalabelData:"156k",
    description: '32k Visitors',
  },
 {
    id: 3,
    title: 'Subscribers',
    progres:"8.3%",
    avalabelData:"3,422",
    description: '$32.48 Average Order',
    divader:""
    
  }]


const AvailableToWithdrowParentComponent = () => {
  return (
    <div style={{display:'flex', height:'150px',alignItems:'center'}}>
        <SelectActionCard  card1={card1[0]}/>
        <Divider  orientation="vertical" sx={{paddingLeft:'30px',height:'110px',marginTop:'20px'}} flexItem />
        <SelectActionCard card1={card1[1]}/>
        <Divider  orientation="vertical" sx={{height:'110px',marginTop:'20px'}}  flexItem />
        <SelectActionCard card1={card1[2]}/>
        <Divider  orientation="vertical" sx={{height:'110px',marginTop:'20px'}}  flexItem />
        <SelectActionCard card1={card1[3]}/>
    </div>
  )
}

export default AvailableToWithdrowParentComponent