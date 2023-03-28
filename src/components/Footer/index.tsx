import React from "react";
import style from "./style.module.css";
import { Icon } from '@iconify/react';

function Footer() {

    return (
        <footer className={style.footer_container}>
            <div className={style.footer_column_a}>
                <h2>Fármacia</h2>

                <p>(61)983036179</p>

                <p>Quadra 293, lote 09, Rua Lucena Roriz, Dalva 04</p>

                <button className={style.footer_button}>Black Friday</button>
            </div>

            <div className={style.footer_column_b}>
                <h2>Nossos valores</h2>

                <p>RESTful API mall, mis on loodud kasutades Golangi, keskendudes skaleeritavusele, turvalisusele ja jõudlusele</p>
            </div>

            <div className={style.footer_column_b}>
                <p>RESTful API mall, mis on loodud kasutades Golangi, keskendudes skaleeritavusele, turvalisusele ja jõudlusele RESTful API mall, mis on loodud kasutades Golangi, keskendudes skaleeritavusele, turvalisusele ja jõudlusele RESTful API mall, mis on loodud kasutades Golangi, keskendudes skaleeritavusele, turvalisusele ja jõudlusele</p>
            </div>

        </footer>
    )
}

export { Footer }