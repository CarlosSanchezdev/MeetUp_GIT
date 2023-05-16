import React from 'react'
import image from "../../assets/images/cartas-01.jpg"
import image2 from "../../assets/images/cartas-02.jpg"
import image3 from "../../assets/images/cartas-03.jpg"
import './Cards.css'


function Cards() {
  return (
    <div className="d-flex justify-content-around m-4">
      <img className="cards" src={image3} alt="imagen3"style={{  height: "550px" }} />
      <img className="cards" src={image2} alt="imagen2" style={{  height: "550px" }} />
      <img className="cards" src={image} alt="imagen" style={{  height: "550px" }}/>
    </div>
  );
}

export default Cards

