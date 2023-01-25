import Head from 'next/head';
import Script from 'next/script';
import Introduction from '../components/introduction/introduction';
import Showcase from '../components/showcase/showcase';
import Additionnals from '../components/additionals/additionnals';

export default function Home() {
  return (
    <>
      <Head>
        <title>bendegeneve</title>
        <meta name="description" content="Ben Degenève Portfolio" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://kit.fontawesome.com/5ebada09cd.js" />
      <Introduction />
      <Showcase />
      <Additionnals />
    </>
  );
}
