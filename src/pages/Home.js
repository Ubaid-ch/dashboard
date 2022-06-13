import React from 'react'
import Gchart from "../components/Gchart"
import Featured from '../components/Featured'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'
import Widget from '../components/Widget'
import "./css/home.css"
import Listtable from '../components/Listtable'
import useLocalStorage from "use-local-storage"

const Home = () => {
  const [theme, setTheme]=useLocalStorage("theme" ? "dark" : "light")
  const switchTheme = () => {
  const newTheme=theme === "light" ? "dark" : "light";      
  setTheme(newTheme)}

  return (
    <div className='home'  data-theme={theme}>
    
      <Sidebar click={switchTheme} />
      
      <div className='theme'>
      <Navbar />
      <div className='widgets'>
        <Widget type="users" />
        <Widget type="orders" />
        <Widget type="balance" />
        <Widget type="earnings" />
      </div>
      <div className='charts'>
        <Featured />
        <Gchart height="400px" />
      </div>
      <div className='table'>
        <p>Latest Transactions</p>
        <Listtable />
      </div>
      </div>
    </div>
  )
}

export default Home