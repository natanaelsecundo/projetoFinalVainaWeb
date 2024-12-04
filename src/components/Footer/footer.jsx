import React, { Component } from 'react'

import face from '../../assets/face.png'
import insta from '../../assets/insta.png'
import linkedln from '../../assets/linkedln.png'
import twitt from '../../assets/twitt.png'
import youtube from '../../assets/youtube.png'
import S from './footer.module.scss'

export default function footer(){
  
    return (
      <div>
        <footer>
         <section className={S.boxSocial}>
            <h3>4002-8922</h3>
            <nav>
            <a href=""><img src={face} alt="" /></a>
            <a href=""><img src={insta} alt="" /></a>
            <a href=""><img src={linkedln} alt="" /></a>
            <a href=""><img src={twitt} alt="" /></a>
            <a href=""><img src={youtube} alt="" /></a>

            </nav>
         </section>

         <section className={S.boxTexto}>
            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
         </section>
        </footer>
      </div>
    )
}
