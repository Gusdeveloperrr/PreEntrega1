import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
const NavBar = () => {
  return (
    <header>
        <h1>Funkos Anime</h1>
        <nav>
            <ul>
                <li>YuyutsuKaisen</li>
                <li>Naruto</li>
                <li>Inuyasha</li>
            </ul>
        </nav>
        <CartWidget/>
      
    </header>
  )
}

export default NavBar

