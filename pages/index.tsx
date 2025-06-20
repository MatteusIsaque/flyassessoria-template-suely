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



export default function Home() {

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-K7HK7VJW'
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
        <FormAndWomen />
        <div className={styles.SegundaParte}>
          <ExemploLashDesigner />
          <Footer />
        </div>
      </main>
      <footer>
        <ButtonZap />
        <Popup />
      </footer>
    </>
  )
}
