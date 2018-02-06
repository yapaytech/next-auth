'use strict'

const nextAuthExpress = require('./src/next-auth-express')
const mongodbFunctions = require('./src/functions/mongodb')

module.exports = {
  configure: nextAuthExpress,
  functions: (connectionString) => {
    // Return Promise with functions suitable for DB in connectionString
    if (connectionString.match(/^mongodb:\/\//)) {
      return mongodbFunctions()
    } else {
      return Promise.reject("Unsupported connection string.")
    }
  },
  sessions: () => {
    // Return Promise with Express Session Store for DB in connectionString
  },
  provider: {
    // Return list of built-in supported providers
    // (Custom oAuth providers can still be specified)
    twitter: {},
    facebook: {},
    google: {}
  }
}
