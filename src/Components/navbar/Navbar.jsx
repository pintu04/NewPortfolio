import React, { useState } from 'react'
import './Navbar.css';
import logo from "../../Assets/briefcase.png";
import linkContact from '../../Assets/phone.png';
import hamlogo from '../../Assets/icons8-hamburger-menu-50.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      <div className='desctopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={100} className='desctopMenuLink'>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={100} className='desctopMenuLink'>About</Link>
        <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={100} className='desctopMenuLink'>Skills</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={100} className='desctopMenuLink'>Portfolio</Link>
      </div>
      <button className='desctopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
       }} >
       <img src={linkContact} alt='contact'  className='desctopMenuImg' 
        />Contact me</button>


       <img src={hamlogo} alt='hamLogo' className='hamlogo' onClick={() => setShowMenu(!showMenu)} />
      <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={100} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={100} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={100} className='listItem' onClick={() => setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={100} className='listItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-65} duration={100} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;
