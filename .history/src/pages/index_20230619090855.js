import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <h1> Home</h1>
    </Layout>
  )
}
