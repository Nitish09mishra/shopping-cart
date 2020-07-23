const express = require('express')
const path = require('path')
const hbs = require('hbs')
const validator = require('express-validator')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')
const flash = require('connect-flash')
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session)

const app = express()

require('./src/db/mongoose')
require('./src/config/passport')


// initializing session...
app.use(cookieParser())
app.use(session({ 
    secret: 'senorita', 
    resave: false, 
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    ttl: 7 * 24 * 60 * 60
}))
// app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false}))
app.use(validator())
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
// use this after app.use(cookieParser()) ....

// this authentication should come before importing routers...
app.use((req, res, next) => {
    res.locals.loggedIn =req.isAuthenticated()
    res.locals.session = req.session
    next()
})

const productRouter = require('./src/router/product')
const userRouter = require('./src/router/user')


app.use(userRouter)
app.use(productRouter)


app.use(express.static(path.join(__dirname, '/public')))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/template/views'))
hbs.registerPartials(path.join(__dirname, '/template/partials'))


app.listen( 3000, () => {
    console.log('Server is up on port 3000')
})
