import React from 'react'
import Head from "next/head";

export default function Seo({title,description}) {
  return (
    <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={description} />
    </Head>
  )
}
