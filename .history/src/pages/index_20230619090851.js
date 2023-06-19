<<<<<<< HEAD
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
=======
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
>>>>>>> 0f6e3e597a7f9aedce4fc9aae0e5be457ae70faa

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <h1> Home</h1>
    </Layout>
  )
}
