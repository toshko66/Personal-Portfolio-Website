import React from 'react';
import '../css/Header.css';
import widget from '../assets/widget.png';

function Header() {
return (
    <header id='about-section'>
        <div className="header-text">
            <h1>Hello, I'm <br></br>Todor Velichkov </h1>
            <p>A frontend developer passionate for web development which allows<br></br> me to combine my creativity with my technical skills <br></br> to create unique and engaging digital experiences. </p>
            <p>
In the past year, I dedicated myself to mastering computer science through programs like Sirma Academy, CS50, Freecodecamp and self-study 🧠.<br></br> I embraced challenges, conquered complex concepts, and worked tirelessly to become the hardworking individual I am today. Excited for the future, I'm ready to make a meaningful impact in the field🥳</p>
        </div>
        <div className="header-image">
            <img src={widget} alt="My Image" />
        </div>
    </header>
);
}

export default Header;
