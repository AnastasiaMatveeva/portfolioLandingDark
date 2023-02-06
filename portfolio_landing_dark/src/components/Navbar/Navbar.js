
import React, {useState, useRef, useEffect} from "react";
import logo from "../../images/logo.svg";
import "./Navbar.scss";
import ScrollIntoView from 'react-scroll-into-view';
import pdf from '../../documents/resume.pdf';



const Navbar = () => {

    
    const [isNavExpended, setIsNavExpended] = useState(false);

    const navLinks =  [ "Home", "About", "Skills", "Portfolio", "Testimonials"];

    const handleClick = () => {
        document.body.classList.toggle('scroll');
         setIsNavExpended(!isNavExpended);
    }


    const renderNavLink = (nav) => {
        const scrollToId = `${nav}`;

        return (
            <li key={nav}>
                <ScrollIntoView selector={`#${scrollToId}`}>
                    <button>{nav}</button>
                </ScrollIntoView> 
            </li>
        )
    }

  return (
    <div className="container header-wrapper">
    <a href="#" className="header-logo" onClick={e => e.preventDefault()}>
        <img src={logo} alt="logo" />
    </a>
    <nav className={isNavExpended ? 'nav active' : 'nav'}  onClick={()=>setIsNavExpended(!isNavExpended)}>
    <ul className={isNavExpended ? 'menu active' : 'menu'} onClick={e => e.stopPropagation()}>
        {navLinks.map((nav) => renderNavLink(nav))}
    </ul>
    </nav>
    <a href={pdf} className="hire-link" download>Hire me</a>
    <button className="hamburger"
        onClick={()=>handleClick()}
    >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <g className={isNavExpended ? 'open active' : 'open'} >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </g>
        <g className={isNavExpended ? 'closed active' : 'closed'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </g>
    </svg>
    </button>
</div>
  )
}

export default Navbar