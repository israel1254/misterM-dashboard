import React from 'react'
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MoreMaxManu from '../moremaxmenu/MoreMaxMenu'
const ProfileFrame = () => {
  return (
    <Card direction="row" spacing={2} style={{width:'95%',height:'70px',backgroundColor:"rgba(110, 57, 203, 1)",borderRadius:'10px',display:'flex',margin:'4px',justifyContent:'center',alignItems:'center',color:'rgba(255, 255, 255, 1)',}}>
      <Avatar alt="Anita cruz" src="" sx={{margin:1}}/>
       <div>
        <h3>Anita Cruz</h3>
        <h5>anita@commerce.com</h5>
       </div>
        <MoreMaxManu/>
    </Card>
  )
}

export default ProfileFrame




