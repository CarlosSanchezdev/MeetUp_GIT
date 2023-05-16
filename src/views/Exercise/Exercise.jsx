import React from 'react'
import Navbar from '../../components/Navbar/NavBar'
import Mosaic from '../../components/Mosaic/Mosaic'
import Baby from '../../components/Baby/Baby'
import Quack from '../../components/Quack/Quack'
import Father from '../../components/Father/Father'
import Crie from '../../components/Cries/Crie'

function Exercise() {
  return (
    <div>
        <Navbar />
        <Father />
        <Crie />
        <Baby />
        <Quack />
        <Mosaic />
    </div>
  )
}

export default Exercise
