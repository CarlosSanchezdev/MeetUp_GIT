import React from 'react'
import NavBar from '../../components/Navbar/NavBar.jsx'
import Cards from '../../components/Cards/Cards.jsx'
import './Home.css'

function Home() {
  return (
    <div className='bg-black'>
      <NavBar />
      <Cards />
    </div>
  )
}

export default Home