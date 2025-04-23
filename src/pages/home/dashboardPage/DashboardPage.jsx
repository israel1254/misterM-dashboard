import React, { PureComponent } from 'react'
import { Divider, Grid } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import DescriptionIcon from '@mui/icons-material/Description';
import { PageContainer } from '@toolpad/core/PageContainer'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button';

import '../../../assets/style/DashboardPage.css' 
import MixedBarChart from '../../../components/transactionGraph/TransactionGraphBar';
import TransactionGraphBar from '../../../components/transactionGraph/TransactionGraphBar';
import PayOutMethod from '../../../components/payoutmethod/PayOutMethod';
import TransactionAllCards from '../../../components/transactionAllCards/TransactionAllCards';
const DashboardPage = () => {
  return (
    <div className='dashboardpage'>
    
      <PageContainer>
          <Grid container  spacing={1}>
            {/* <Grid size={5} /> */}
            
            <Grid size={9} container spacing={3.5} justifyContent={'center'}  height={550} bgcolor={'white'} borderRadius={3}>
              
              <Grid size={11.3} paddingTop={2} height={20}>
                <h3>Active users right now</h3>
                 {/* <Skeleton height={20} variant='text'/> */}
              </Grid>
              <Grid size={2.7}  paddingTop={0} height={260}>
                <div>
                  <div>
                  <h1 style={{fontFamily:"sans-serif",fontSize:"64px" ,color:"rgba(110, 57, 203, 1)",fontWeight:"600",}}>300</h1>
                  <div className='pageperview'>
                    <h1><DescriptionIcon/> </h1>
                    <p>Page Views per minute</p>
                  </div>
                  </div>
                  <Divider style={{paddingTop:'15px'}}/>
                  <div className='payoutmethod'>
                    <div style={{width:'90%',height:'90px',paddingTop:'4px'}}>
                      <PayOutMethod/>
                      
                    </div>
                    <p>Upgrade your payout method in setting</p>
                  </div>
                </div>
              {/* <Skeleton height={270} variant='rectangular'/> */}
              <Card />
              </Grid>
              <Grid size={8.5} paddingTop={3} height={250}  >
                <Card sx={{borderRadius:2,}}>
                  <div className='transactioncard'>
                  <TransactionGraphBar/>
              
                  </div>
                </Card>
              {/* <Skeleton height={240} variant='rectangular' /> */}
              </Grid>
              <Grid size={2.8} height={170}>
                    <Card className='allcard'>
                      
                    </Card>
                  {/* <Skeleton height={170} variant='rounded'/> */}
              </Grid>
              <Grid size={2.8} height={170}>
                  <Card className='allcard'>

                  </Card> 
                  {/* <Skeleton height={170} variant='rounded'/> */}
              </Grid>
              <Grid size={2.8} height={170}>
                 <Card className='allcard'>

                 </Card>
                  {/* <Skeleton height={170} variant='rounded'/> */}
              </Grid>
              <Grid size={2.8} height={170}>
                 <Card className='allcard'>
                   
                  </Card>
                  {/* <Skeleton height={170} variant='rounded'/> */}
              </Grid>
              
            </Grid>
            
             
            <Grid size={3} paddingLeft={3} height={330} >
              <div className='earning'>
              <Card sx={{height:330,textAlign:'center'}}>
                <h4 >Your earning this month</h4>
                <h1>735.2$</h1>
                <div style={{width:'100%', justifyContent:'center', display:'flex'}}>  <h5>Update your payout method in Setting</h5></div>
                <div style={{paddingTop:'30px'}}>
                <Button variant="contained" sx={{bgcolor:'transparent',color:'rgba(110, 57, 203, 1)',fontSize:'12px',height:'45px'}}>withdraw all earnings</Button>
                </div>
              </Card>
              </div>
              {/* <Skeleton height={350} variant='rectangular'/> */}
              <Grid size={12} sx={{paddingTop:4}}>
                <div>
                <Card sx={{height:321,display:'flex',justifyContent:'center'}}>
                  <div>
                    <h4>Earnings by item</h4>
                  </div>
                </Card>
                </div>
               
              {/* <Skeleton height={424} /> */}
            </Grid>
            <Grid size={12} sx={{paddingTop:4,paddingBottom:10}}>
              <div>
                <Card sx={{height:260}}>

                </Card>
              </div>
              {/* <Skeleton height={400} /> */}
            </Grid>
            </Grid>
           

            <Grid size={9} sx={{paddingTop:4}}>
              <div>
                <Card sx={{height:410,borderRadius:2}}>

                </Card>
              </div>
              {/* <Skeleton height={410} /> */}
            </Grid>
           
            
           
          </Grid>
        </PageContainer>
    </div>
  )
}

export default DashboardPage