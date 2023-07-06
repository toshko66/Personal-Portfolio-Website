import React, { useState, useEffect } from 'react';
import SocialIcons from '../components/SocialIcons';
import '../css/footer.css';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: 'Europe/Sofia' // Set the time zone to Bulgaria/Plovdiv
      };
      setCurrentTime(now.toLocaleString('en-US', options));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="footer">
        <p className="footer__quote"><span>"Got a job for me?</span> Just contact me!"</p>
      <div className="footer__contact">
        <div>
          <p className="footer__address">Address:Plovdiv/Bulgaria</p>
          <p className="footer__phone">Phone:+359 898 792 978</p>
        </div>
      </div>
      <SocialIcons />
      <p className="footer__copy">&copy; 2023 Your Website Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
