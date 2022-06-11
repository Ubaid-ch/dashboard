import React from 'react'

import Chart from "../components/Gchart"
import "./css/singl.css"
import Listtable from '../components/Listtable'
import image from "../pics/my.jpg"

const Single = () => {
  return (
    
      <div className='container3'>
     
      <div className='section'>
       <div className='card'>
         <div className='top3'>
          <span className='txt3'>DETAILS</span>
          <button className='button3'>Edit</button>
         </div>
         <div className='bottom3'>
           <img className='img3' src={image} alt="img"/>
           <div className='info3'>
             <h1>Jordan Ubaid</h1>
             <p className='para3'>Emial: xyz@gmail.com</p>
             <p className='para3'>Phone: +1234 13 13</p>
             <p className='para3'>Country: USA</p>
             <p className='para3'>Emial: xyz@gmail.com</p>
           </div>
         </div>
       </div>
       <div className='chart3'>
         <Chart height="250px" />
       </div>
      </div>
      <div className='lst3'>
      <Listtable />
      </div>
    </div>

    
  )
}

export default Single