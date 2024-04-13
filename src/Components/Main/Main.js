import React from 'react';
import "./main.scss";
import fura from '../Main/img/furra.svg'
import icon from '../Main/img/icon.svg'
import icon2 from '../Main/img/icon2.svg'
import icon1 from '../Main/img/icon3.svg'

function Main() {
  return (
    <div className='Conteiner'>
      <div className="fura">
        <div className="f1">
          <h1>Поставщик Дальнего <br /> Востока</h1>
          <p>Наши клиенты получают полный спектр услуг по работе с Китаем. <br />  Начиная с подбора производителя заканчивая доставкой товара до двери. <br />  Настолько прозрачных сделок с Китаем вы еще не осуществляли.</p>
          <p className='pi'>Узнать больше</p>
        
        </div>
        <div className="f">
            <img src= {fura} alt="" />
          </div>
      </div>
      <div className="cards">
        <div className="card">
          <img src= {icon} alt="" />
          <h3>Поиск производителей <br /> по товару</h3>
          <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed <br /> do eiusmod incididunt ut.</p>
          </div>
          {/* <div className="line"></div> */}
        <div className="card">
          <img src= {icon2} alt="" />
          <h3>Поиск конкретного  <br /> производителя</h3>
          <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed <br /> do eiusmod incididunt ut.</p>
          </div>
        <div className="card">
          <img src= {icon1} alt="" />
          <h3>Доставка образцов <br />товаров</h3>
          <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed <br /> do eiusmod incididunt ut.</p>
          </div>
      </div>
    </div>
  );
}

export default Main;
