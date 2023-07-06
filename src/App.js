import React from 'react';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Technologies from './components/Tech';
import Header from './components/Header';

import Footer from './components/footer';
import './css/App.css';


function App() {
  return (
    <div className='Container'>
      <NavBar />  
      <div id='header-section'>      
          <Header />
      </div>
      <Technologies/>
        <Projects/>

        <Footer/>
    </div>
    
  );
}

export default App;