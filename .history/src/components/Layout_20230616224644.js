import React from 'react'
import Head from 'next/head'

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
    <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keyword' content={description} />
    </Head>
    </div>
  )
}
