import React from 'react'
import Navbar from '../../components/Navbar/NavBar'
import Commands from '../../components/Commands/Commands'
import './Command.css'

function Command() {
  return (
    <div className='bg-black'>
      <Navbar />
      <Commands />
    </div>
  )
}

export default Command
