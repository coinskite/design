import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='home-header dfc pad-main-1-3'>
      <div className='dfc gap1'>
        <h1>We can design your business ideas to profitable business</h1>

        <p><button>HIRE US</button></p>

        <h2>We are hepling with:</h2>

        <div className='df home-links'>
          <Link to="/">Digital Strategy</Link>
          <Link to="/">Branding</Link>
          <Link to="/">User Experience</Link>
          <Link to="/">Development</Link>
          <Link to="/">Web Design</Link>
          <Link to="/">Enterprise</Link>
          <Link to="/">Graphic Design</Link>
        </div>
      </div>
    </div>
  )
}

export default Header