const { JWT_SECRET } = require('../config/index')
const CLT_USER = require('../models/user')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const opts = { secretOrKey: JWT_SECRET, jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() }
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    console.log(jwt_payload)
    try {
      const user = await CLT_USER.findById(jwt_payload.id)
      if (!user) {
        return done(new Error('Cannot find this user'), false)
      }
      return done(null, user)
    } catch (error) {
      done(error)
    }
  })
)

module.exports.isLoggedIn = passport.authenticate('jwt', { session: false })
