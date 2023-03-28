import React, { ReactNode } from "react";
import style from "./style.module.css";

interface Props {
    name: string;
    price: number;
    img: string;
}

function Card({ name, price, img }: Props) {

    return (
        <div className={style.product_card}>
            <img className={style.product_card_image} src={img} />
            <p className={style.product_card_title}>{name}</p>
            <p className={style.product_card_price}>R$:{price}</p>
        </div>
    )
}

export { Card }