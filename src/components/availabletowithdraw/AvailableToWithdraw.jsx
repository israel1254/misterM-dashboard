import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { CardHeader, Divider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



function SelectActionCard(props) {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <div
      style={{
        width: '240px',
        paddingLeft:'0',
        marginLeft:'50px'
        // display: 'grid',
        // gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        // gap: 2,
      }}
    >
      
    
        
            <div style={{ height: '100px' }}>

              <div style={{display:'flex',gap:"15px"}}>
                <h5 style={{fontSize:'13px',fontWeight:'700',lineHeight:'100%',color:'#3A3541'}}>{props.card1.title}</h5>
                <div style={{width:'65px',height:'25px',backgroundColor:'#F4F5F9',alignItems:'center',textAlign:'center',display:'flex',borderRadius:'8px'}}> <KeyboardArrowDownIcon/>{props.card1.progres}</div>
              </div>
              <h1 style={{display:'flex',color:'#6E39CB',lineHeight:'50px',fontSize:'28px'}}>{props.card1.avalabelData}</h1>
               <p style={{display:'flex',fontSize:'14px',color:'#89868D'}}>
                {props.card1.description}
              </p>

            </div>
        
        

    </div>
  );
}

export default SelectActionCard;
