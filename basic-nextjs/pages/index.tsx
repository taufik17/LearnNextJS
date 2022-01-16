import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <header>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/users">Users</Link></li>
        </ul>
      </header>
      <h1>Wellcome Taufik Agung Santoso</h1>
    </>
  )
}

export default Home
