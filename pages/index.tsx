import '../styles/pixi.module.css'
import { getProducts, Product } from '@stripe/firestore-stripe-payments'
import Head from 'next/head'
import Script from 'next/script'
import { useRecoilValue } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom.'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Plans from '../components/Plans'
import Row from '../components/Row'
import useAuth from '../hooks/useAuth'
import useList from '../hooks/useList'
import useSubscription from '../hooks/useSubscription'
import payments from '../lib/stripe'
import { Movie } from '../typings'
import requests from '../utils/requests'
import Document from 'next/document'
import { useEffect } from 'react'

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
  products: Product[]
}

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
  products,
}: Props) => {
  const { user, loading } = useAuth()
  const subscription = useSubscription(user)
  const showModal = useRecoilValue(modalState)
  const movie = useRecoilValue(movieState)
  const list = useList(user?.uid)


  if (loading || subscription === null) return null

  if (!subscription) return <Plans products={products} />

  return (
    <div
      className={`relative w-full lg:h-[140vh] ${
        showModal && '!h-screen !overflow-hidden !w-full'
      }`}
    >
      <Head>
        <title>
          {movie?.title || movie?.original_name || 'Home'} - Mbijiwe Exihibition
        </title>
        <link rel="icon" href="/favicon.ico" />
        
        <Script src="../styles/magictext.js" strategy="beforeInteractive"></Script>
      </Head>

      <Header />

      <main className="relative pl-0 pb-10 lg:space-y-24 lg:pl-0 ">
      {/* <canvas className="orb-canvas"></canvas>
<div className="overlay">
  <div className="overlay__inner">
    </div>
    </div> */}
        <Banner netflixOriginals={netflixOriginals} />
       <div className="top-0  web-sects">
        <section className="md:space-y-12">
          <Row title="Latest Posts" movies={trendingNow} />
          <Row title="Minerals" movies={topRated} />
          <Row title="Rocks" movies={actionMovies} />
          {/* My List*/} 
         {/* {list.length > 0 && <Row title="My List" movies={list} />} */}

          <Row title="Mining sites" movies={comedyMovies} />
        </section>
        </div> 
        
      </main>
      {showModal && <Modal />}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((error) => console.log(error.message))

  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      products,
    },
  }
}




