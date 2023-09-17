import React from 'react';
import './about.scss';
import img from '../../video/car.svg'

const About = () => {
  return (
    <>
      <section className="about" id='about'>
          <div className="about__content">
            <div className="about__left">
                <h3 className='about__subtitle'>для стартаперов</h3>
                <h2 className="about__title">Что нужно сделать для получение спонсирование</h2>
                <p className="about__descr">
                  Регистируйтесь как стартапер и заполнити форму. Люди со всего мира могут ознакомиться с вашим проектом с спонсировать.
                </p>
                <button className='about__btn'>Get Started</button>
            </div>
            <div className="about__right">
                <img className='about__img' src={img} alt='img' />
            </div>
          </div>
      </section>
    </>
  )
};

export default About;
