import styles from './../styles/Home.module.scss'

import FormAndWomen from '../components/firstBackground'
import ExemploLashDesigner from '../components/informations'
import Image from 'next/image'

import Logo from './../img/Logo_suely.png'
import Footer from '../components/footer'
import ButtonZap from '../components/firstBackground/buttonZap'

import TagManager from 'react-gtm-module'
import { useEffect } from 'react'
import Head from 'next/head'
import Popup from '../components/popup/popup'
import Form from '../components/form'
import ButtonZapFlutuante2 from '../components/firstBackground/buttonZapPage2'
import FormAndWomenPage2 from '../components/firstBackground/indexPage-2'



export default function Home() {

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-M749XFN'
    }
 
    TagManager.initialize(tagManagerArgs)

  }, [])


  return (
    <>

      <Head>
        <title>
          Fly Assessoria
        </title>
      </Head>
      <main>
        <FormAndWomenPage2 />
        <div className={styles.SegundaParte}>
          <ExemploLashDesigner />
          <Footer />
        </div>
      </main>
      <footer>
        <ButtonZapFlutuante2 />
        <Popup />
      </footer>
    </>
  )
}
