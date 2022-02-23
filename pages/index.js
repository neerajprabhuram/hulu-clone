import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu clone</title>
        <meta name="description" content="Hulu clone is an OTT platform where you can 
        watch the movies you like" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Results */}
      <Results/>
      
    </div>
  )
}
