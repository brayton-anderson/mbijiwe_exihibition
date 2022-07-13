import { InformationCircleIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import bg from '../styles/adverts.module.css'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import { FaPlay } from 'react-icons/fa'
import { modalState, movieState } from '../atoms/modalAtom.'
import { useRecoilState } from 'recoil'
import Image from 'next/image'

interface Props {
  netflixOriginals: Movie[]
}

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animate(star: any) {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)
  let index = 0,
  interval = 10000;
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
    for(const star of document.getElementsByClassName("magic-star")) {
      setTimeout(() => {
        animate(star);
        
        setInterval(() => animate(star), 1000);
      }, index++ * (interval / 3))
    }
  }, [netflixOriginals])

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-1 ">
    
      <div className="absolute top-0 left-0 -z-20 h-full w-full">
       <div className="stack min-w-full min-h-full h-full w-full top-0 left-0 right-0">
          {/* <div className="h-full w-full top-0 left-0 right-0 ">

          </div> */}
          <div className="h-full w-full top-0 left-0 right-0 object-cover transform-none">
          <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="
          min-w-full 
          min-h-[20%] 
          h-[25%] 
          lg:min-h-[50%] 
          lg:h-[55%] 
          w-full
          object-cover 
          bg-primary
          ">
            <source 
            src="/assets/mbijiwe_masthead.mp4" 
            type="video/mp4; codecs=avc1" 
            />
        </video>
            {/* <Image
            layout="responsive"
            height={`70%`}
            width={100}
            src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
            objectFit="cover"/> */}
          </div>
        </div>
      </div>
      <div className={`${bg.bannerGradient} absolute  min-w-full min-h-[30%] h-[35%] lg:min-h-[60%] lg:h-[65%] w-full top-0 left-0 right-0 ...`} 
     // style={{}}
      >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-screen h-screen md:min-h-[55%] md:h-[60%] min-w-full w-full justify-items-center my-10 lg:my-10 p-4 lg:p-8">
      
      <div className='justify-center lg:justify-self-start items-center font-extrabold text-white ...'>
      <h1 className="">
        <span className="text-gradient">
        Explore the world
       {/* {movie?.title || movie?.name || movie?.original_name}  */}
        </span>
      </h1>
      <div className='pl-[70px]'>
      <h1 className="htextser">
      <span className="magic htextser...">
    <span className="magic-star">
      <svg viewBox="0 0 512 512">
      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
      </svg>
    </span>
    <span className="magic-star">
      <svg viewBox="0 0 512 512">
      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
      </svg>
    </span>
    <span className="magic-star">
      <svg viewBox="0 0 512 512">
      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
      </svg>
    </span>
    <span className="htextser text-gradient magic-text ...">
      of Minerals , Rocks
      </span>
      </span>
      </h1>
      </div>
      <h1 className="">
        <span className="text-gradient">
        &#38; Mining sites.
        </span>
      </h1>
      <p className="max-w-xs text-xs font-semibold md:max-w-lg md:text-lg lg:max-w-xl lg:text-xl">
        {/* {movie?.overview} */}
        Millions of minors and organisations around the world
        showcase their extractions on <strong>Mbijiwe exihition </strong> 
        platform.
      </p>
      <div className="flex space-x-3 top-3 pt-[16px]">
      {/* <a 
         className="btn bg-gradient-to-r border-none border-transparent hover:border-transparent 
          from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
            <p className="text-transparent">
                ........
                </p>
                Donate
                <p 
                className="text-transparent">
                    ........
                    </p>
                    </a> */}
        {/* <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>*/}

        <button
          className="btn glass capitalize btn-outline bannerButton"
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
          👋 Start here!
          {/* <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> More Info */}
        </button> 
      </div>
      </div>
      <div className='grid grid-cols-45 min-h-full h-full gap-3 justify-self-center place-items-center bg-black m-[calc(150px/2)] rotate-45   ...'>
      {/* <div className=" ..."> */}
      <Image
      className='imug'
            height={150}
            width={150}
            src="/assets/minerals-removebg2.png"
            objectFit="cover"
            alt="a house on a mountain"
            />
          <Image
          className='imug'
          height={150}
          width={150}
          src="/assets/minerals-removebg1.png"
            objectFit="cover"
            alt="sime pink flowers"
            />  
            <Image
            className='imug'
            height={150}
            width={150}
            src="/assets/minerals-removebg4.png"
            objectFit="cover"
            alt="big rocks with some trees"
            /> 
            <Image
            className='imug'
            height={150}
            width={150}
            src="/assets/minerals-removebg3.png"
            objectFit="cover"
            alt="a cool landscape"
            /> 
{/* </div> */}
      </div>
      </div>
      </div>

    </div>
  )
}

export default Banner