import React from 'react'
import image5 from '../../assets/images/mosaico-02.png'
import './Father.css'

function Father() {
  return (
    <div className='father' >
     <div  className=" d-flex justify-content-around m-4">
      <img src={image5} alt="imagen1"style={{  height: "580px" }} />
      </div>
    </div>
  )
}

export default Father