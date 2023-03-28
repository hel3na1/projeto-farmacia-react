import React from 'react';
import style from "./style.module.css";
import { Header } from './components/Header';
import { Footer } from './components/Footer';


function App() {
  return (
    <div>
      <Header />

      <div className={style.main_container}>
        <div className={style.card_container}>
          <div className={style.product_card}>
            <img className={style.product_card_image} src="https://i0.statig.com.br/bancodeimagens/ar/r0/av/arr0avlvtimebdnduyyahl2to.jpg" />
            <p className={style.product_card_title}>Titulo do produto 002</p>
            <p className={style.product_card_price}>R$:156,00</p>
          </div>
          <div className={style.product_card}>
            <img className={style.product_card_image} src="https://i0.statig.com.br/bancodeimagens/ar/r0/av/arr0avlvtimebdnduyyahl2to.jpg" />
            <p className={style.product_card_title}>Titulo do produto 003</p>
            <p className={style.product_card_price}>R$:1222,00</p>
          </div>
          <div className={style.product_card}>
            <img className={style.product_card_image} src="https://i0.statig.com.br/bancodeimagens/ar/r0/av/arr0avlvtimebdnduyyahl2to.jpg" />
            <p className={style.product_card_title}>Titulo do produto 003</p>
            <p className={style.product_card_price}>R$:1222,00</p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
