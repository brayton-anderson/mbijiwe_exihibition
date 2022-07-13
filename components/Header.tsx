import Image from 'next/image'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import useAuth from '../hooks/useAuth'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import BasicMenu from './BasicMenu'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        {/* <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        /> */}
        <p className="normal-case text-transparent  bg-clip-text bg-gradient-to-r text-xl lg:text-2xl font-bold font-pacifico from-[#21C9E0] to-[#F1F579] hover:from-[#F1F579] hover:to-[#21C9E0] ...">Mbijiwexihibition</p>

        <BasicMenu />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            Home
          </li>
          <li className="headerLink">Minerals</li>
          <li className="headerLink">Rocks</li>
          <li className="headerLink">Mining sites</li>
          <li className="headerLink">Downloads</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light text-white">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        <Link href="/account">
        <p className="hidden lg:inline">Sign In?</p>
        </Link>
        {/* <BellIcon className="h-6 w-6" /> */}
        {/* <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link> */}
        <button
          className="btn glass normal-case btn-outline bannerButton"
          onClick={() => {
            // setCurrentMovie(movie)
            // setShowModal(true)
          }}
        > &#129309; a hand? </button> 
      </div>
    </header>
  )
}

export default Header
