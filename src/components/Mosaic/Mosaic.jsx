import React from 'react'
import image1 from '../../assets/images/mosaic-8-01.png'

function Mosaic() {
  return (
    <div className='mosaic'>
       <div className="d-flex justify-content-around m-4">
      <img src={image1} alt="imagen1"style={{  height: "850px" }} />
      </div>
      
    </div>
  )
}

export default Mosaic
