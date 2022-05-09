import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";

export default function NavBar () {
    return (
        <nav className="navbar">
            <div>

              <a className= "logo" href= "/">
                  </a>

                  <Link className="logo" to="/">
                  <h3>Harry Potter</h3>
                  </Link>

            </div>

            <div>
               <Link className="nav-link" to="/">Home
               </Link>

                <Link className="nav-link" to="/About">Sobre
                </Link>

                <Link className="nav-link" to="/books">Livros
                </Link>
                
            </div>
        </nav>
    );
}