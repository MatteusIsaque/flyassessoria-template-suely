import Image from "next/image";
import Link from "next/link";

import styles from './styles.module.scss'

import WhatsApp from './../../../img/whatsapp.png'

export default function ButtonZapFlutuante2() {

  return (
    <div id="zapFlutuante" className={styles.ButtonFlutuanteZap}>
      <Link href="https://api.whatsapp.com/send?phone=5555119911514&text=Ol%C3%A1,%20estou%C2%A0precisando%20de%20ajuda%20para%20ter%20o%20financiamento%20imobili%C3%A1rio%20aprovado.%20Vi%20seu%20an%C3%BAncio%20para%20Mei%20ou%20Micro%20Empres%C3%A1rio,%20voc%C3%AA%20pode%20me%20tirar%20algumas%20d%C3%BAvidas?">
        <Image id="zapFlutuante" src={WhatsApp} width={60} height={60} />
      </Link>
    </div>
  )
}