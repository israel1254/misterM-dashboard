
import './App.css'
import SideBar from './components/sidebar/sidebar'
import DashboardLayoutBasic from './mainPage/MainPage'
import MainPage from './mainPage/MainPage'
import DashboardPage from './pages/home/dashboardPage/DashboardPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  

  return (
  <div className='app'>
   {/* <MainPage/> */}
     <BrowserRouter>
     <Routes>
      <Route/>
      <Route/>
     </Routes>
     </BrowserRouter>
    <SideBar/>
  </div>
  )
}

export default App
