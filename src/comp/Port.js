import React from 'react';
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import arrow from '../img/arrow.png';

import port1 from '../img/port/1.png';
import port2 from '../img/port/2.png';
import port3 from '../img/port/3.png';
import port4 from '../img/port/4.png';
import port5 from '../img/port/5.png';
import port6 from '../img/port/6.png';
import port7 from '../img/port/7.png';
import port8 from '../img/port/8.png';
import port9 from '../img/port/9.png';
import port10 from '../img/port/10.png';

function Sec({ src }) {
  return (
    <div className='dfc port-main no-gap'>
      <div className='df jc-fe p-8'>
        <img src={img1} alt="top" />
        <img src={img2} alt="top" />
        <img src={img3} alt="top" />
      </div>

      <div className='flex1 port-img p-8' style={{ paddingBottom: "0" }}>
        <img src={src} alt="web" />
      </div>
    </div>
  )
}

function Port() {
  return (
    <div className='pad-main-1-3 port-holder'>
      <h1 className='port-h1'>Portfolio</h1>

      <div className='part-list'>
        <Sec src={port1} />
        <Sec src={port2} />
        <Sec src={port3} />
        <Sec src={port4} />
        <Sec src={port5} />
        <Sec src={port6} />
        <Sec src={port7} />
        <Sec src={port8} />
        <Sec src={port9} />
        <Sec src={port10} />
      </div>

      <div className='df jc-fe'>
        <p>See all</p>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  )
}

export default Port