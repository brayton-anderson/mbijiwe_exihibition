const withTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
]) // pass the modules you would like to see transpiled

module.exports = withTM({
  // experimental: {
  //   nextScriptWorkers: true,
  // },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: [
      'rb.gy', 
      'image.tmdb.org',
      'picsum.photos'
    ],
  },
})
