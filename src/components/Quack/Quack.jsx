import React from 'react'
import image3 from '../../assets/images/mosaico-03.png'
import './Quack.css'

function Quack() {
  return (
    <div className='quack' >
     <div  className=" d-flex justify-content-around m-4">
      <img src={image3} alt="imagen1"style={{  height: "580px" }} />
      </div>
    </div>
  )
}

export default Quack
