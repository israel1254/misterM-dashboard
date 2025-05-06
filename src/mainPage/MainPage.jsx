import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DashboardPage from '../pages/home/dashboardPage/DashboardPage';
import AnalyticsPage from '../pages/home/analyticsPage/AnalyticsPage';
import ProfileOverViewPage from '../pages/pages/profileOverviewPage/ProfileOverViewPage';
import TeamsPage from '../pages/pages/team/TeamsPage';

const MainPage = () => {
  return (
    <div>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<DashboardPage/>}/>
      <Route path='analytics' element={<AnalyticsPage />}/>
      
      <Route path='profileoverview' element={<ProfileOverViewPage />}/>
      <Route path='teams' element={<TeamsPage/>}/>
      <Route path='allprojects' element=''/>
      <Route path='reports' element=''/>
      <Route path='newuser' element=''/>
      <Route path='setting' element=''/>
      <Route path='billing' element=''/>
      <Route path='invoice' element=''/>
      <Route path='security' element=''/>
      <Route path='general' element=''/>
      <Route path='timeline' element=''/>
      <Route path='newproject' element=""/>
      <Route path='pricingpage' element=""/>
      <Route path='charts' element=""/>
      <Route path='notifcation' element=""/>
      <Route path='chat' element=""/>
      <Route path='kanban' element=""/>
      <Route path='wizard' element=""/>
      <Route path='datatables' element=""/>
      <Route path='calender' element=""/>
      <Route path='newprodacts' element=""/>
      <Route path='editprodacts' element=""/>
      <Route path='prodactslist' element=""/>
      <Route path='orderslist' element=""/>
      <Route path='orderdetail' element=""/>
      <Route path='signin' element=""/>
      <Route path='login' element=""/>
      {/* <Route path='' element=""/>
      <Route path='' element=""/>
      <Route path='' element=""/>
      <Route path='' element=""/> */}
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default MainPage