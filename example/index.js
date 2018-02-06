/**
 * Simple example of how to use the NextAuth module.
 **/

const next = require('next')
const nextAuth = require('next-auth')

require('dotenv').load()

const nextApp = next({
  dir: '.',
  dev: (process.env.NODE_ENV === 'development')
})

nextApp
.prepare()
.then(() => {
  return nextAuth.configure(nextApp, {
     serverUrl: process.env.SERVER_URL,
     port: process.env.PORT || 3000,
     functions: nextAuth.functions(process.env.CONNECTION_STRING),
     sessions: nextAuth.sessions(process.env.CONNECTION_STRING),
     email: {
       from: process.env.EMAIL_FROM,
       host: process.env.EMAIL_SERVER,
       port: process.env.EMAIL_PORT,
       username: process.env.EMAIL_USERNAME,
       password: process.env.EMAIL_PASSWORD
     },
     providers: [],
     _providers: [
       {
         provider: nextAuth.provider.facebook,
         id: process.env.FACEBOOK_ID,
         secret: process.env.FACEBOOK_SECRET
       },
       {
         provider: nextAuth.provider.twitter,
         id: process.env.TWITTER_ID,
         secret: process.env.TWITTER_SECRET
       }
     ]
  })
})
.then((response) => {
  console.log(`Ready on http://localhost:${response.port}`)
})
.catch(err => {
  console.log('An error occurred, unable to start the server')
  console.log(err)
})