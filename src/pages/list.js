import React from 'react'
import Sidebar from "../components/sidebar"
import Navbar from "../components/Navbar"
import './css/list.css'
import DataTable from '../components/Datatable'
import { Link, Outlet } from 'react-router-dom'

const List = ({title}) => {
  
  return (
    <div className='list'>
      
      <div className='side'><Sidebar /></div>
      <div className='container2'>
      <Navbar />
      <div className='btn-grp1'>
      <Link to="new" style={{ textDecoration: 'none' }}>
        <div className='btn-new'>{title}</div>
      </Link>  
      <Link to="single" style={{ textDecoration: 'none' }}>
        <div className='btn-dtl'>View Details</div>
      </Link>
      </div>
     
      <Outlet />
      <DataTable />
      </div>
      
    </div>
  )
}

export default List