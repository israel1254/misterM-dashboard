import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AvailableToWithdraw from '../../../components/availabletowithdraw/AvailableToWithdraw';
import AvailableToWithdrowParentComponent from '../../../components/availabletowithdraw/AvailableToWithdrowParentComponent';
import SelesFunnelAreaChart from '../../../components/salesfunnel/SalesFunnelAreaChart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height:'200',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function AnalyticsPage() {
  return (
    <div style={{paddingTop:"35px"}}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid size={{ xs: 6, md: 12 }}  >
          <Item>
           <AvailableToWithdrowParentComponent/>
          </Item>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <Item>
            < SelesFunnelAreaChart/>
          </Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
