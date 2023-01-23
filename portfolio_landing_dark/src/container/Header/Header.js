import React from "react"
import "./Header.scss"
import Navbar from "../../components/Navbar/Navbar"

const Header = () => {
  return (
    <header className='header' id="Home">
      <div className="header-fixed">
        <Navbar/>
      </div>
    </header>
  )
}

export default Header