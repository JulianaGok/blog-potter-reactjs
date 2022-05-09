import React from "react";
import {Link} from "react-router-dom";

import "./styles.css";

export default function Post () {
    return (
        <div className="post-container" > <div>
            
        <img className="post-imagem" src= "2.jpg" />
        </div>

        <div> 
            <p className="post-date" > 1990</p>

           <Link to="books">
            <h2 className="post-title"> Origem </h2>
            </Link>

            <p className="post-description">J.K. Rowling estava em um trem indo de Manchester para Londres quando a ideia para Harry simplesmente "apareceu" em sua cabeça.
            Naquela noite, a autora começou a escrever seu primeiro romance, Harry Potter e a Pedra Filosofal, 
            e um plano que incluía os enredos de cada uma dos sete livros, além de muita informação biográfica e histórica sobre seus personagens e universo.

            </p>

        </div>

        </div> 
    );
}
