import styles from './styles.module.scss'
import Link from 'next/link'

interface ParamButton {
  titulo: string
}



export function ButtonZap2({ titulo }: ParamButton) {

  return (
    <Link href="https://wa.me/5511991151492?text=Estou+interessado%28a%29+no+seu+an%C3%BAncio+de+parceria+com+a+Fly+Assessoria+para+aprova%C3%A7%C3%A3o+de+cr%C3%A9dito+imobili%C3%A1rio.+Voc%C3%AA+pode+me+ajudar%3F">
      <button id="buttonZap" className={styles.button} >{titulo}</button>
    </Link>
  )
}