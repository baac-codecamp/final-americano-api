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
app.use('/admin', require('./routes/adminRoute'))
//app.use('/front', require('./routes/frontRoute'))

// ----------------TestData
// Add ObjUser

function TestCreate() {
  const CLT_USER = require('./models/user')
  let obj1 = new CLT_USER()
  console.log(obj1)
  obj1.username = 'Kraisit'
  obj1.password = 'baac@123'
  obj1.fullname = 'Kraisit.ch'
  obj1.save()
  console.log(obj1)
}
// TestCreate()

//console.log(data)

// ------------------ Init Data
const ADMIN_BL = require('./controllers/adminController')
ADMIN_BL.insertDataCustomer()

app.use(notFoundHandler)
app.use(errorHandler)

// Start server ...
app.listen(PORT, () => console.log(`[Check-Salak-API][${ENV}]: Listening on port ${PORT}`))
