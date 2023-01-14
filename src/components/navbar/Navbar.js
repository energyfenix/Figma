import React  from 'react'
import logo from "../../asset/logo.jpg"
import "./NavbarMedia.css"   
import "./Navbar.css"
import "./Phone-media.css"
function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar__collection">
            <div className="navbar__logo">
                <img src={logo} width={110} alt="" />
                
            </div>
            <ul className="navbar__routes">
                <li className='route__item'>Home</li>
                    <li className='route__item'>Portfolio</li>
                <li className='route__item'>  Skills</li>
                <li className='route__item'>About Me</li>
            </ul>
            <div className="navbar__tech">
                <button className='mode'>Dark mode</button>
                <button className='contact'>contact me</button>
            </div>
        </div>
          
        
    </div>
  )
}

export default Navbar