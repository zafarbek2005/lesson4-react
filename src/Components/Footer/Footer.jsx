import React from 'react'
import './Footer.scss'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
   <>
   
   
   <footer>
    <section id='se' className='Container'>
      
      <div className="fotter-lyout">

        <div className="logo">
          <h1>
          LOGO
          </h1>
        </div>

        <div className="items">
          <p>Каталог</p>
          <p>о компании</p>
          <p>Индивидуальная </p>
          <p>Партнерам</p>
        </div>

        <div className="items">
          <p>2D, 3D модели</p>
          <p>Шоу-румы</p>
          <p>Дилерам </p>
         <p>Контакты</p>
          <p>Конфигуратор</p>
        </div>

        <div className="social-media">
            <div className="media-logo">
              <a href="https://www.instagram.com/">{<FaInstagram />}</a>
              <a href="https://www.facebook.com/"><CiFacebook /></a>

              <p>+38 (099)-638-45-37</p>

              <button>Персональная консультация</button>
              
            </div> 

           
        </div>

      </div>




      <p id='title'>© 1993–2021 Интернет-магазин «LOGO» — truck</p>





    </section>

   </footer>
   
   
   
   
   
   
   
   
   
   </>


   



  )
}

export default Footer