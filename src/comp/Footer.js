import React from 'react'
import fb from '../img/footer/fb.png';
import insta from '../img/footer/insta.png';
import linkedin from '../img/footer/linkedin.png';
import twitter from '../img/footer/twitter.png';

function Footer() {
  return (
    <footer className='pad-main-3'>
      <h1>Let’s talk.</h1>
      <p>design@coinskite.com</p>
      <div className='df footer-sociacl-ic'>
        <img src={fb} alt="social" />
        <img src={insta} alt="social" />
        <img src={linkedin} alt="social" />
        <img src={twitter} alt="social" />
      </div>

      <div className='df jc-fe'>
        <div className='p-16'>
          <p>Clients</p>
          <p>Work</p>
          <p>About</p>
        </div>

        <div className='p-16'>
          <p>Dribbble</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer