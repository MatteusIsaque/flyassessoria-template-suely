import styles from './styles.module.scss'

import suelyCurso from './../../img/suely-curso.png'
import Image from 'next/image'


import { useEffect, useState } from 'react'
import Form from '../form'

import Primeiro from './../../img/analisamo-os-documentos.jpg'
import Segundo from './../../img/analise-de-documento.jpg'
import Terceiro from './../../img/encaminhamento-para-aprovação.jpg'

import PrimeiroComentario from './../../img/Camada5.png'
import SegundoComentario from './../../img/Camada7.png'
import TerceiroComentario from './../../img/Camada9.png'


export default function ExemploLashDesigner() {

  const [width, setWidth] = useState<number>(0)



  useEffect(() => {

    const largura = window.innerWidth;

    setWidth(largura)
  }, [])


  return (
    <div className={styles.Info}>
      <h2 style={{ marginTop: '10px', textAlign: 'center', textTransform: 'uppercase' }}>A Fly Assessoria te ajuda a realizar o sonho da casa própria</h2>
      <p style={{ textAlign: 'center' }}>A Fly Assessoria acredita que todos têm o direito à casa própria, por isso a Fly Assessoria está empenhada em possibilitar que todas as famílias, independentemente da renda, tenha o financiamento aprovado.</p>

      <p style={{ textAlign: 'center' }}>Basta ter um nome limpo e entrar em contato com um de nossos servidores e nós o ajudaremos ao durante o processo de aprovação.</p>

      <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>possuimos um processo de aprovação simples</h2>

      <div className={styles.passos}>
        <div className={styles.passosParaCredito}>
          <div>
            <Image src={Primeiro} />
          </div>
          <div>
            <h2>Você Envia Seus Documentos</h2>
            <p>Você envia seus documentos para nossa análise sem pagar nada antes.</p>
          </div>
        </div>
        <div className={styles.passosParaCredito}>
          <div>
            <Image src={Segundo} />
          </div>
          <div>
            <h2>Analisamos Seus Documentos</h2>
            <p>Seus documentos são analisados cuidadosamente.</p>
          </div>
        </div>
        <div className={styles.passosParaCredito}>
          <div>
            <Image src={Terceiro} />
          </div>
          <div>
            <h2>Encaminhado Para Aprovação</h2>
            <p>Estando tudo certo, seus documentos são enviados para aprovar seu crédito.</p>
          </div>
        </div>
      </div>


      <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>O que fazer depois disso?</h2>

      <p style={{ textAlign: 'center' }}>É só aguardar nossa equipe que iremos te auxiliar durante todo o processo até o desfecho do financiamento.</p>


      <div className={styles.passos} >

        <div>
          <Image src={PrimeiroComentario} />
        </div>
        <div>
          <div>
            <Image src={SegundoComentario} />
          </div>
        </div>
        <div>
          <div>
            <Image src={TerceiroComentario} />
          </div>
        </div>

      </div>

      <Form />
    </div>
  )
}