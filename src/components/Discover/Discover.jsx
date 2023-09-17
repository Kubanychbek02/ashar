import React from 'react';
import './discover.scss';
import Car from '../../video/car.svg';
import Doc from '../../video/doc.svg';
import Ser from '../../video/ser.svg';

const Discover = () => {
  return (
    <>
      <section className="discover" id='discover'>
          <h2 className="discover__title">Наша цель</h2>
          <div className="discover__content">
            <div className="discover__block">
                <div className="discover__block-content">
                <img className='discover__block-img' alt='img' src={Car} />
                <h3 className="discover__block-title">Помочь стартапам</h3>
                <p className="discover__block-descr">
                  Здесь вы можете получить инвестицию в свой стартап.
                </p>
                </div>
            </div>
            <div className="discover__block">
                <div className="discover__block-content">
                <img className='discover__block-img' alt='img' src={Ser} />
                <h3 className="discover__block-title">Помочь инвесторам</h3>
                <p className="discover__block-descr">
                  Здесь вы можете инвестировать в переспективные проекты.
                </p>
                </div>
            </div>
            <div className="discover__block">
                <div className="discover__block-content">
                <img className='discover__block-img' alt='img' src={Doc} />
                <h3 className="discover__block-title">Стартап нация</h3>
                <p className="discover__block-descr">
                  Мы хотим создать полощадку где каждый сможет реализовать свою идею.
                </p>
                </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Discover
