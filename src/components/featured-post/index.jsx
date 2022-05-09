import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";

export default function FeaturedPost () {
    return (
        <div className="featured-post-container" > 

        <div>
        <img src= "4.jpg" />
        </div>
        
        <div> 
            <p className="featured-post-date" > 26 de junho de 1997</p>

            <Link to="about">
            <h2 className="featured-post-title"> Lançamento </h2>
           </Link>

            <p className="featured-post-description">Desde o lançamento do primeiro romance, Harry Potter e a Pedra Filosofal, os livros ganharam uma imensa popularidade, aclamação da crítica e foram um sucesso comercial em todo o mundo.
                A série também recebeu algumas críticas, incluindo a preocupação com o tom cada vez mais sombrio conforme a história progredia. Até maio de 2015, já haviam sido vendidas 450 milhões de cópias em todo o mundo, tornando a série a best-seller da história, sendo traduzida para 73 idiomas.
                Os últimos quatro livros consecutivamente foram considerados os mais vendidos da história, sendo que o último livro vendeu cerca de 11 milhões de cópias nos Estados Unidos nas primeiras 24 horas após o seu lançamento.
            </p>

        </div>

        </div> 
    );
}
