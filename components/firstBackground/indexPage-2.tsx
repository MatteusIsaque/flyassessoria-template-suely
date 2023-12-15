import Modelo from './../../img/moça.png'
import Image from 'next/image'
import styles from "./styles.module.scss"




import PrimeiraImage from './../../img/logos.png'
import { Button } from '../button'
import { ButtonForm } from './buttonForm'
import { ButtonZap2 } from '../buttonPage2'



export default function FormAndWomenPage2() {

  return (
    <div className={styles.backgroundFundoImage}>
      <div className={styles.divFormAndWomen}>
        <div className={styles.Modelo}>
          <Image src={Modelo} layout='responsive' alt="modelo" />
        </div>

        <div className={styles.content}>

          <h1 style={{ color: 'var(--roxo-escuro)' }}>
            Seja  parceiro da <br />Fly Assessoria Habitacional!
          </h1>
          <h3>
            Basta ter nome limpo que a Fly Assessoria<br />
            aprova o crédito do seu cliente, independente da renda.
          </h3>
          <p>
            Após a aprovação do crédito do seu cliente, vamos estar
            <br />
            pagando uma porcentagem do empréstimo.
          </p>

          <div className={styles.buttons}>
            <ButtonZap2 titulo="WHATSAPP" />
            <ButtonForm titulo="ENVIAR EMAIL" />
          </div>

        </div>
      </div>

    </div>
  )
}