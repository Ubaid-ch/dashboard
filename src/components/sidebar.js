import React from 'react'
import "./sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AnchorIcon from '@mui/icons-material/Anchor';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Sidebar = () => {
 
  
  return (
    <div className='main'>
        <div className='top'>
           <span className='toptxt'>Admin</span> 
            </div>
        <div className='middle'>
          <ul>
          <p>MAIN</p>
            <Link to="/" style={{ textDecoration: 'none' }}><li>
            <DashboardIcon className='icon1' />
              <span className='link2'>Dashboard</span>
            </li>
            </Link>
          <p>LISTS</p>
          <Link to="/users"  style={{ textDecoration: 'none' }}>
            <li>
              <PersonIcon className='icon1' />
              <span className='link2'>Users</span></li>
          </Link>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <ProductionQuantityLimitsIcon className='icon1' />
              <span className='link2'>Products</span></li>
          </Link>
            <li>
            <BorderColorIcon className='icon1' />
              <span className='link2'>Orders</span></li>
            <li>
              <LocalShippingIcon className='icon1'  />
              <span className='link2'>Delivery</span></li>
          <p>USEFUL</p> 
            <li>
              <QueryStatsIcon className='icon1' />
              <span className='link2'>Stats</span></li>
            <li>
              <NotificationsActiveIcon className='icon1' />
              <span className='link2'>Notifications</span>
              </li>
          <p>SERVICES</p>  
            <li>
              <HealthAndSafetyIcon className='icon1' />
              <span className='link2'>System health</span></li>
            <li>
              <AnchorIcon className='icon1' />
              <span className='link2'>Logs</span></li>
            <li>
              <SettingsIcon className='icon1' />
              <span className='link2'>Settings</span></li>
          <p>USER</p>    
            <li>
              <PersonIcon className='icon1' />
              <span className='link2'>Profile</span> </li>
            <li>
              <LogoutIcon className='icon1' />
              <span className='link2'>Log Out</span></li>
          </ul>
        </div>
        <div className='bottom'>
             <div className='c1'></div>
             <div className='c2'></div>
        </div>
    </div>
  )
}

export default Sidebar