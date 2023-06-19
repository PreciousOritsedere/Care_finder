import React from 'react'
import Head from 'next/head'

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
    <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
    </Head>
    </div>
  )
}

Layout.defaultProps = {
    title: 'Carefinder'
}