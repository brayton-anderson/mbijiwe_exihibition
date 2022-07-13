import React , { useState, useEffect } from 'react';

// interface ScrollValue {
//   innerWidth: number
// }

// export const SizeContext = React.createContext<ScrollValue>({
//   innerWidth: 0
// })

// const [width, setWidth] = React.useState(0);

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height
//   };
// }

export default function useWindowDimensions() {
  const [width, setWidth] = React.useState(0);
 // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
     // setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize, {passive: true});
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}