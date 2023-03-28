import React from 'react';
import style from "./style.module.css";
import { Icon } from '@iconify/react';


function App() {
  return (
    <div>
      <header className={style.header}>
        <div className={style.header_container}>
          <div className={style.header_login}>
            <p className={style.header_login_text}>Login</p>
          </div>

          <div className={style.search_bar}>
            <div className={style.input_container}>
              <input className={style.input_pesquisa} type="text" />
            </div>
            <button className={style.input_button}>Pesquisa</button>
          </div>

          <div className={style.header_icons}>
            <Icon className={style.header_icon} icon="mdi:cards-heart-outline" />
            <Icon className={style.header_icon} icon="map:grocery-or-supermarket" />
          </div>

        </div>
        <div className={style.sub_header}>
          <div className={style.sub_header_container}>
            <button className={style.sub_header_button_a}>Categorias</button>

            <div className={style.sub_header_center}>
              <div className={style.sub_header_center_iten}>Home</div>
              <div className={style.sub_header_center_iten}>Pages</div>
              <div className={style.sub_header_center_iten}>Shop</div>
              <div className={style.sub_header_center_iten}>Blog</div>
              <div className={style.sub_header_center_iten}>Galery</div>
            </div>

            <button className={style.sub_header_button_b}>Black Friday</button>
          </div>
        </div>
      </header>

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

      <footer className={style.footer_container}>
        <div className={style.footer_column_a}>
          <h2>Fármacia</h2>

          <p>(61)983036179</p>

          <p>Quadra 293, lote 09, Rua Lucena Roriz, Dalva 04</p>

          <button className={style.sub_header_button_b}>Black Friday</button>
        </div>

        <div className={style.footer_column_b}>
          <h2>Nossos valores</h2>

          <p>RESTful API mall, mis on loodud kasutades Golangi, keskendudes skaleeritavusele, turvalisusele ja jõudlusele</p>
        </div>

        <div className={style.footer_column_b}>
          <p>RESTful API mall, mis on loodud kasutades Golangi, keskendudes skaleeritavusele, turvalisusele ja jõudlusele RESTful API mall, mis on loodud kasutades Golangi, keskendudes skaleeritavusele, turvalisusele ja jõudlusele RESTful API mall, mis on loodud kasutades Golangi, keskendudes skaleeritavusele, turvalisusele ja jõudlusele</p>
        </div>

      </footer>
    </div>
  );
}

export default App;
