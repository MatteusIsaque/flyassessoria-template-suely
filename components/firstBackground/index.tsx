import Modelo from './../../img/moça.png'
import Image from 'next/image'
import styles from "./styles.module.scss"


import { useEffect, useState } from 'react'


import PrimeiraImage from './../../img/logos.png'
import { Button } from '../button'
import { ButtonForm } from './buttonForm'



export default function FormAndWomen() {

  const [width, setWidth] = useState<number>(0)


  useEffect(() => {

    const largura = window.innerWidth;

    setWidth(largura)
  }, [])


  return (
    <div className={styles.backgroundFundoImage}>
      <div className={styles.divFormAndWomen}>
        <div className={styles.Modelo}>
          <Image src={Modelo} layout='responsive' />
        </div>

        <div className={styles.content}>

          <h1 style={{ color: 'var(--roxo-escuro)' }}>
            Seu Financiamento imobiliário foi <br />negado ou está sem crédito ?
          </h1>
          <h3>
            Basta ter nome limpo que a Fly Assessoria<br />
            aprova seu crédito, independente da renda.
          </h3>
          <p>
            Pague somente após ter o crédito aprovado.
            <br />
            Rápido, fácil e sem burocracia.
          </p>

          <div className={styles.buttons}>
            <Button titulo="WHATSAPP" />
            <ButtonForm titulo="ENVIAR EMAIL" />
          </div>

        </div>
      </div>

    </div>
  )
}