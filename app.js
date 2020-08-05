const express = require('express')
const cors = require('cors')
const passport = require('passport')

const db = require('./config/db')
const { PORT, ENV } = require('./config/index')
const { logHandler } = require('./middleware/logHandler')
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler')

// Connnect database
db.connectMongoDB()

// Main app object
const app = express()

// Init app
app.use(logHandler)
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(passport.initialize())

// Api Routes
try {
  app.use('/front', require('./routes/frontRoute'))
  app.use('/admin', require('./routes/adminRoute'))
} catch (error) {
  next(error)
}

// ------------------ Init Data
const ADMIN_BL = require('./controllers/adminController')
// ADMIN_BL.insertDataCustomer()
//ADMIN_BL.insertDataReward()

const FRONT_BL = require('./controllers/frontController')
// FRONT_BL.findSalakByCID()
// app.use(notFoundHandler)
// app.use(errorHandler)

// Start server ...
app.listen(PORT, () => console.log(`[Check-Salak-API][${ENV}]: Listening on port ${PORT}`))
