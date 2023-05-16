import React from 'react'
import image1 from '../../assets/images/mosaico-04.png'
import './Baby.css'

function Baby() {
  return (
    <div className='baby' >
     <div  className=" d-flex justify-content-around m-4">
      <img src={image1} alt="imagen1"style={{  height: "580px" }} />
      </div>
    </div>
  )
}

export default Baby
