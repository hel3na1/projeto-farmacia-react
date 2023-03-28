import React from "react";
import style from "./style.module.css";
import { Icon } from '@iconify/react';

function Header() {

    return (
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
    )
}

export { Header }