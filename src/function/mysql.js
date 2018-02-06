module.exports = () => {
  let connection = null
  
  this.createUser = ({name, email}) => {
    return new Promise((resolve, reject) => {
      // return {id, name, email} or null
    })
  }
  
  this.getUserById = ({userId}) => {
    return new Promise((resolve, reject) => {
      // return {id, name, email} or null
    })
  }
  
  this.getUserByEmail = ({email}) => {
    return new Promise((resolve, reject) => {
      // return {id, name, email} or null
    })
  }

  this.getUserByProvider = ({provider, providerAccountId}) => {
    return new Promise((resolve, reject) => {
      // return {id, name, email} or null
    })
  }
    
  this.deleteUser = ({userId}) => {
    return new Promise((resolve, reject) => {
      // return true
    })
  }
  
  this.createEmailToken = ({userId}) => {
    return new Promise((resolve, reject) => {
      // return emailToken
    })
  }
  
  this.verifyEmailToken = ({token}) => {
    return new Promise((resolve, reject) => {
      // return userId
    })
  }
  
  this.linkAccount = ({userId, provider, providerAccountId, providerProfile, accessToken, refreshToken}) => {
    return new Promise((resolve, reject) => {
      // return true
    })
  }
  
  this.unlinkAccount = ({userId, provider}) => {
    return new Promise((resolve, reject) => {
      // return true
    })
  }
  
  this.getRefreshToken({userId, provider}) => {
    return new Promise((resolve, reject) => {
      // return refreshToken
    })
  }
  
  this.updateAccessToken = ({userId, provider, accessToken}) => {
    return new Promise((resolve, reject) => {
      // return true
    })
  }
  
  // Return once connection to database established
  return new Promise((resolve, reject) => {
    resolve(this)
  })
}