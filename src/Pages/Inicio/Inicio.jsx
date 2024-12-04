




import s from './inicio.module.scss'
import imagem1 from '../../assets/grupoPessoas.png'
import imagem2 from '../../assets/leituralivro.png'
import imagem3 from '../../assets/punho.png'
import imagem4 from '../../assets/balanca.png'


export default function Inicio() {
    return (
      <main>
         <section className={s.firstSection}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.devoDoar}>
                <div>
                    <h2>Por que devo Doar?</h2>
                </div>
                <section className={s.boxCard}>
                    <article>
                            <img src={imagem1} alt="Contem um circulo onde há quatro persongem em ao redor
" />
                            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                        </article> 
                        <article>
                            <img src={imagem2} alt="Contem um personagem lendo um livro
" />
                            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                        </article>
                        <article>
                            <img src={imagem3} alt="Contem um punho acima de um grupode pessoas
" />
                            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                        </article>
                        <article>
                            <img src={imagem4} alt="Contem uma balança com dois pratos em cada lado
" />
                            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
            </section>
        </section>
    </main>
    )
  }