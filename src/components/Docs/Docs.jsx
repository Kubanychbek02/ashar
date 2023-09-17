import React from 'react';
import './docs.scss';
import img from '../../video/doc.svg';
import $ from 'jquery';

const Docs = () => {
  return (
    $('.docs__btn').on('click', () => {
      $('.signin').addClass('signin__active');
    }),

    <>
      <section className="docs" id='signup'>
        <div className="docs__content">
            <div className="docs__left">
                <h3 className='docs__subtitle'>стартап нация</h3>
                <h2 className="docs__title">Как мы можем помочь</h2>
                <p className="docs__descr">
                  Создать онлайн-платформу, которая помогает гражданам и организациям объединять усилия и ресурсы для решения конкретных общественных и социальных проблем.
                </p>
                <button className='docs__btn'>Get Started</button>
            </div>
            <div className="docs__right">
                <img className='docs__img' src={img} alt='img' />
            </div>
          </div>
      </section>
    </>
  )
}

export default Docs
