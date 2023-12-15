import Image from "next/image";
import Link from "next/link";

import styles from './styles.module.scss'

import WhatsApp from './../../../img/whatsapp.png'

export default function ButtonZapFlutuante2() {

  return (
    <div id="zapFlutuante" className={styles.ButtonFlutuanteZap}>
      <Link href="https://wa.me/5511991151492?text=Ol%C3%A1%2C+estou+precisando+de+ajuda+para+ter+o+financiamento+imobili%C3%A1rio+aprovado.+Vi+seu+an%C3%BAncio+para+Mei+ou+Micro+Empres%C3%A1rio%2C+voc%C3%AA+pode+me+tirar+algumas+d%C3%BAvidas%3F">
        <Image alt="whatsapp" id="zapFlutuante" src={WhatsApp} width={60} height={60} />
      </Link>
    </div>
  )
}