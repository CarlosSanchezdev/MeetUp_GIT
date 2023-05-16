import React from 'react'
import practicas01 from '../../assets/images/practicas-01.png'
import practicas02 from '../../assets/images/practicas-02.png'
import practicas03 from '../../assets/images/practicas-03.png'
import practicas04 from '../../assets/images/practicas-04.png'
import practicas05 from '../../assets/images/practicas-05.png'

function GoodPractices() {
  return (
    <div className="bg-black d-flex flex-column align-items-center   ">
        <div className="d-flex justify-center m-5 ">
            <img src={practicas01} className="mx-4" alt="practicas-01" style={{ width: "530px" }} />
        
            <img src={practicas02} className="mx-4" alt="practicas-02" style={{ width: "530px"}} />
        
            <img src={practicas03} className="mx-4" alt="practicas-03" style={{ width: "530px"}} />
        </div>
        
        <div className="d-flex justify-center m-5 ">
            <img src={practicas04} className="mx-4" alt="practicas-04" style={{ width: "530px"}} />
        
            <img src={practicas05} className="mx-4" alt="practicas-05" style={{ width: "530px"}} />
        </div>
    </div>
  )
}

export default GoodPractices