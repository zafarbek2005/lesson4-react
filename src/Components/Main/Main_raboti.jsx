import React from 'react'
import "./Mainraboti.scss"
import fura from "../Main/img/furaaa.svg"
import fura2 from "../Main/img/furaaa2.svg"
import fura3 from "../Main/img/furaaa3.svg"
import rec from "../Main/img/Rectangle 32.svg"
import rec2 from "../Main/img/Rectangle 33.svg"
import rec1 from "../Main/img/Rectangle 34.svg"
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

        <section className='Conteiner'>
                <h1 className='etap'>Этапы поставки </h1>
                <div className="kard">
                    <div className="ph">
                        <img src= {rec} alt="" />
                    </div>

                    <div className="ot">
                        <h3>Предложение от продавца</h3>
                        <div className="line"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. </p>
                    </div>
                </div>
                <div className="kard">
                    <div className="ph">
                        <img src= {rec2} alt="" />
                    </div>

                    <div className="ot">
                        <h3>Предложение от продавца</h3>
                        <div className="line"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. </p>
                    </div>
                </div>
                <div className="kard">
                    <div className="ph">
                        <img src= {rec1} alt="" />
                    </div>

                    <div className="ot">
                        <h3>Предложение от продавца</h3>
                        <div className="line"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. </p>
                    </div>
                </div>
        </section>
    </div>
    
  )
}

export default Main_raboti;