import React from 'react';
import Tech from '../css/Tech.css'
import css3 from '../assets/css3.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import tailwind from '../assets/tailwind.png'


const List = () => {
  const imageSources = [
    css3,
    html,
    js,
    react,
    redux,
    tailwind

];

  return (
    <div className='Tech'>
        <h2 className='tech-title'>Tech Stack</h2>
        <ul className='List'>
        {imageSources.map((imageSrc, index) => (
            <li key={index} className='list-item'>
            <img src={imageSrc} alt={`List Item ${index}`} className='image'/>
            </li>
        ))}
        </ul>
    </div>
  );
};

export default List;
