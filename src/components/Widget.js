import React from 'react'
import './widget.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const Widget = ({type}) => {
  let data;

  const amount = 121001;
  const diff = 20;
  switch(type){
    case "users":
      data={
        title:"USER",
        isMoney:false,
        link:"see all detail",
        icon:<PersonOutlineIcon fontSize='large' className='icn2' />
      }
      break;
      case "orders":
        data={
          title:"ORDERS",
          isMoney:false,
          link:"see all detail",
          icon: <BorderColorIcon fontSize='large' className='icn3' />
        }
        break;
      case "balance":
        data={
          title:"BALANCE",
          isMoney:false,
          link:"see all detail",
          icon: <AccountBalanceWalletIcon fontSize='large' className='icn4' />
        }
        break;
        case "earnings":
          data={
            title:"EARNINGS",
            isMoney:true,
            link:"see all detail",
            icon: <MonetizationOnIcon fontSize='large' className='icn5' />
          }
          break;
          default:
            break;

  }
  return (
    <div className='widget'>
        <div className='left'>
            <div className='title'>{data.title}</div>
            <div className='nmbr'>{data.isMoney && "$"} {amount}</div>
            <div className='link'>{data.link}</div>
        </div>
        <div className='right'>
           <div className='percentage'>
               <KeyboardArrowUpIcon />
               {diff}%
           </div>
           {data.icon}
        </div>
    </div>
  )
}

export default Widget