import { Route, BrowserRouter,Routes } from "react-router-dom";
import Home from "../pages/home";
import NavBar from "../components/navbar";
    export default function AplicationRoutes () {
        return (
            <BrowserRouter>
            <NavBar/>
             <Routes>
                <Route path="/" element = {<Home />} /> 
                <Route path="/about" element = {
                
                <p> Os romances giram em torno de Harry James Potter, um órfão que descobre com 11 anos que é um bruxo, que vive no mundo comum de pessoas não-mágicas, conhecidas como "trouxas".
                O mundo bruxo é mantido em segredo, presumivelmente para evitar a perseguição de bruxas e bruxos. Tal habilidade é inata e essas crianças são convidadas a participar de uma 
                escola de magia exclusiva, que ensina as habilidades necessárias para ter sucesso no mundo bruxo.
                Harry torna-se um estudante da Escola de Magia e Bruxaria de Hogwarts e é ali onde a maioria dos eventos da série acontecem. Enquanto Harry se desenvolve 
                através da adolescência, ele aprende a superar os problemas que ele enfrenta: mágicos, sociais e emocionais, incluindo desafios adolescentes comuns, como amizades, 
                paixões e provas, e o grande teste de preparar a si mesmo para o confronto no mundo real que temos pela frente.  Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. 
                    A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao 
                    ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts. O arco de história principal diz respeito às amizades de 
                    Harry com outros bruxos de sua idade, como Ronald Weasley e Hermione Granger, e também com o diretor de Hogwarts Albus Dumbledore, 
                    considerado o maior dos magos, e seus conflitos com o bruxo das trevas Lord Voldemort, que pretende se tornar imortal, 
                    conquistar o mundo dos bruxos, subjugar as pessoas não-mágicas e destruir todos aqueles que estão em seu caminho, especialmente Harry Potter, 
                    a quem ele considera seu maior rival.
                </p> 
            
        } />
             </Routes> 

             <Routes>
                <Route path="/books" element = {
                
                <p> 
                    Os livros em ordem de publicação: Harry Potter e a Pedra Filosofal, Harry Potter e a Câmara Secreta, Harry Potter e o Prisioneiro de Azkaban, Harry Potter e o Cálice de Fogo, 
                    Harry Potter e a Ordem da Fênix, Harry Potter e o Enigma do Príncipe e Harry Potter e as Relíquias da Morte.
                </p> } />
             </Routes> 

            </BrowserRouter>
        );
    }



