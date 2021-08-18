import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { UnauthenticatedHeader as Header } from '../components/Headers/Unauthenticated'
import { Main } from '../components/Main'

export default function HomeUnauthenticated() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}
