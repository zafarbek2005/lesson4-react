import React from 'react'
import "./Mainraboti.scss"
import fura from "../Main/img/furaaa.svg"
import fura2 from "../Main/img/furaaa2.svg"
import fura3 from "../Main/img/furaaa3.svg"
function Main_raboti() {
  return (
    <div className="Conteiner  raboti ">
        <div className="ra">
            <h3>Выполненные работы</h3>
            <p>Мы собрали информацию по грузам, которые мы уже доставили. У нас специальный подход к каждому виду товаров.</p>
        </div>

        <div className="cards">
            <div className="card">
                <img src= {fura} alt="" />
                <h3>Станки и оборудование</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.</p>
                <h5>20 000 руб.</h5>
            </div>
            <div className="card">
                <img src= {fura2} alt="" />
                <h3>Компоненты и запчасти</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.</p>
                <h5>18 000 руб.</h5>
            </div>
            <div className="card">
                <img src= {fura3} alt="" />
                <h3>Станки и оборудование</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.</p>
                <h5>20 000 руб.</h5>
            </div>
      
      
        </div>
    </div>

  )
}

export default Main_raboti