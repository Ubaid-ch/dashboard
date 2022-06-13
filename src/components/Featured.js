import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./feature.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const Featured = () => {
  const config = {
    id: 0, // important
    percent: 50,
    colorSlice: "#E91E63"
  };
  
    const [update, setUpdate] = useState(config);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setUpdate({
          ...config,
          id: 0, // we indicate which component we want to change
          percent: Math.floor(Math.random() * 100 + 1),
          // colorSlice: "#FFF",
          fontColor: "#F50057",
          fontSize: "1.2rem",
          fontWeight: 700
        },[]);
      }, 3000);
      return () => clearInterval(interval);
    });
  
    const newObject = { ...config, ...update };
  return (
    <div className='feature' >
      <div className='tp'>
        <h1 className='title'>TOTAL REVENUE</h1>
        <MoreVertIcon />
      </div>
      <div className='bottom2'>
        <div className='featured-chart'>
        <CircularProgressBar {...newObject} />
        </div>
        <p className='title'>Total sales today</p>
        <p className='amount'>450$</p>
        <p className='des'>Previous transactions processing, last transactions may not be included</p>
      </div>
    </div>
  )
}

export default Featured