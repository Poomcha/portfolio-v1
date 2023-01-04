import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <title>bendegeneve</title>
        <meta name="description" content="Ben Degenève Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src='https://kit.fontawesome.com/5ebada09cd.js' />
    </>
  )
}
