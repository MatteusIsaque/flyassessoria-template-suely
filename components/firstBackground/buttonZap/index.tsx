import Image from "next/image";
import Link from "next/link";

import styles from './styles.module.scss'

import WhatsApp from './../../../img/whatsapp.png'

export default function ButtonZap() {

  return (
    <div id="zapFlutuante" className={styles.ButtonFlutuanteZap}>
      <Link href="https://api.whatsapp.com/send?phone=555511991151492&text=Estou%20precisando%20de%20ajuda%20para%20ter%20o%20financiamento%20aprova.%20Algum%20atendente%20da%20Fly%20Assessoria%20pode%20me%20ajudar%3F">
        <Image id="zapFlutuante" src={WhatsApp} width={60} height={60} />
      </Link>
    </div>
  )
}