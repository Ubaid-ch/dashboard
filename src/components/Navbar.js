import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import "./navbar.css"
import image from "../pics/my.jpg"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' className='input' placeholder='search...' />
          <SearchIcon />
        </div>
        <div className='items'>
        <div className='item'>
          <LanguageIcon />
        </div>
        <div className='item'>
          <DarkModeOutlinedIcon  />
        </div>
       
        <div className='item'>
        <FullscreenExitOutlinedIcon />
        </div>
        <div className='item'>
        <NotificationsNoneOutlinedIcon />
        <div className='counter'>2</div>
        </div>
      
        <div className='item'>
        <ChatBubbleOutlineOutlinedIcon />
        <div className='counter'>1</div>
        </div>
        <div className='item'>
          <ListOutlinedIcon />
        </div>
        <div className='item'>
          <img src={image} alt="img" className='avatar'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar