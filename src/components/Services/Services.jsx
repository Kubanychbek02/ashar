import React from 'react';
import './services.scss';
import img from '../../video/price.svg'

const Services = () => {
  return (
    <>
        <section className="services" id='services'>
          <div className="services__content">
            <div className="services__right">
                <img className='services__img' src={img} alt='img' />
            </div>
            <div className="services__left">
                <h3 className='services__subtitle'>для спонсоров</h3>
                <h2 className="services__title">Инвестируйте в будущее</h2>
                <p className="services__descr">
                    Регистируйтесь как спонсор и инвестируйте в проекты которые вы считаете переспективным
                </p>
                <button className='services__btn'>Get Started</button>
            </div>
          </div>
        </section>
    </>
  )
}

export default Services
