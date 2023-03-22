import styles from './styles.module.scss'
import Link from 'next/link'

interface ParamButton {
  titulo: string
}



export function ButtonZap2({ titulo }: ParamButton) {

  return (
    <Link href="https://wa.me/5511991151492?text=Ol%C3%A1%2C+estou+precisando+de+ajuda+para+ter+o+financiamento+imobili%C3%A1rio+aprovado.+Vi+seu+an%C3%BAncio+para+Mei+ou+Micro+Empres%C3%A1rio%2C+voc%C3%AA+pode+me+tirar+algumas+d%C3%BAvidas%3F">
      <button id="buttonZap" className={styles.button} >{titulo}</button>
    </Link>
  )
}