import Head from 'next/head'
import Header from '../componentss/Header'
import Navbar from '../componentss/Navbar'
import Results from '../componentss/Results'

export default function Home() {
  return (
    <div>
      <Head>
        <title>OTT Platform</title>
        <meta name="description" content="An OTT platform to display movies" />
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
