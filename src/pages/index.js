import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout'

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Dashboard | Pemilra FTI UAJY</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <p>Dashboard | Pemilra FTI UAJY</p>
        </main>
      </Layout>
    </>
  );
}
