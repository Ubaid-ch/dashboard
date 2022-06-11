import React from 'react'
import "./css/new.css"
import image from "../pics/IconBros.png"

import CameraAltIcon from '@mui/icons-material/CameraAlt';

const New = ({inputs,title}) => {
  return (
   
      <div className='container4'>
        
      <div className='cover'>
        <div className='head4'><h1>{title}</h1></div>
        <div className='form'>
          <div className='right4'>
            <img src={image} className='pic4' alt='img'/>
          </div>
          <div className='left4'>
          <form>
          <div className='formInput'>
              <label htmlFor='file'>
                Picture<CameraAltIcon />
              </label>
              <input  type="file" className='file' id='file' />
            </div>
            {inputs.map( (input) => (
              <div className='formInput'>
              <label>{input.label}</label>
              <input type={input.type} className='inpt4' placeholder={input.placeholder} />
            </div>
            ))}
            
            
            
            <button className='btn4'>Submit</button>
            
          </form>
          </div>
          </div>
        </div>
      </div>
   
  )
}

export default New