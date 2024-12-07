

import logo from '../../assets/logolivroHeader.png'
import lupa from '../../assets/lupa.png'
import { BrowserRouter , Route , Routes , Link } from "react-router-dom"
import Inicio from '../../Pages/Inicio/Inicio'
import QueroDoar from '../../Pages/QueroDoar/QueroDoar'
import Doados from '../../Pages/Doados/Doado'
import S from './Header.module.scss'
export default function Header(){
 
    return (
     <BrowserRouter>
      <header className={S.header}>
        <section className={S.boxLogo}>
           <img src={logo} alt="Logotipo representando um livro aberto" />
           <h1>Livros Vai na Web</h1>
        </section>
        <nav className={S.boxMenu}>
            <ul>
                <li><Link to="/" >Inicio</Link></li>
                <li><Link to="/doados" >Livros Doados</Link></li>
                <li><Link to="/querodoar" >Quero Doar</Link></li>
            </ul>
        </nav>

        <div className= {S.boxInput}>

            <input className= {S.input} type="text" 

            placeholder="O que você procura? "/>
            
            <img src={lupa} alt="Ícone de lupa para pesquisa" />

        </div>

      </header>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/doados" element={<Doados/>}/>
          <Route path="/querodoar" element={<QueroDoar/>}/>
        </Routes>
      </BrowserRouter>
    )
    
}

