import React from 'react';
import '../css/NavBar.css'
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  logo from '../assets/logo3.png';


function NavBar( ) {
    const scrollToSection = (section) => {
    scroll.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -80,// adjust this to match the height of your header/navbar
    });
    console.log(NavBar);
};

return (
<div className='nav-wrapper'>
<div className='logo'>
    <img src={logo} alt="logo" />
    </div>
<nav>
    <ul>
        <li>
            <Link
                FontAwesomeIcon icon="fa-solid fa-grid-2" 
                to="about-section"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => scrollToSection('about-section')}
            >
            About
            </Link>
        </li>
        <li>
            <Link
                to="projects-section"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => scrollToSection('projects-section')}
            >
            Projects
            </Link>
        </li>
        <li>
            <Link
                to="social-icons"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => scrollToSection('social-icons')}
            >
            Contact
            </Link>
        </li>
    </ul>
</nav>
</div>
);
}

export default NavBar;
