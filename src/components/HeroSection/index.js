import React, { useState } from 'react';
import { MdKeyboardArrowRight as ArrowRight, MdArrowForward as ArrowForward } from 'react-icons/md';
  
import './hero.scss';
// import { 
//   HeroContainer, 
//   HeroBg, 
  // VideoBg, 
//   HeroContent, 
//   HeroH1, 
//   HeroP, 
//   HeroBtnWrapper, 
//   ArrowForward, 
//   ArrowRight 
// } from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <div className='hero' id='herosection'>
      <div className="hero__bg">
        <img alt='img' className='hero__video' src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/463668/data-mining.jpg&w=2000&op=resize" />
      </div>
      <div className='hero__content'>
        <h1 className='hero__title'>Цифровое спонсирование Ashar</h1>
        <p className='hero__descr'>
          Получи спонсирование в свой стартап и реализуй свою идею.
        </p>
        <div className='hero__wrapper'>
          <a className='hero__btn' href='#signup' onMouseEnter={onHover} onMouseLeave={onHover}>Get started {hover ? <ArrowForward/> : <ArrowRight/>}</a>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
