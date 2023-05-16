import React from 'react'
import image2 from '../../assets/images/mosaico-05.png'
import './Crie.css'

function Crie() {
  return (
    <div className='crie' >
     <div  className=" d-flex justify-content-around m-4">
      <img src={image2} alt="imagen1"style={{  height: "580px" }} />
      </div>
    </div>
  )
}

export default Crie