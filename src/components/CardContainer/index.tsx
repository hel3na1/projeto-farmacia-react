import React, { ReactNode } from "react";
import style from "./style.module.css";

interface Props {
    children?: ReactNode;
}

function CardContainer({ children }: Props) {

    return (
        <div className={style.main_container}>
            <div className={style.card_container}>
                {children}
            </div>
        </div>
    )
}

export { CardContainer }