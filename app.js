const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieparser = require('cookie-parser')

const subscribeRouter = require('./routes/subscribeRouter')
const loginRouter = require('./routes/loginRouter')
const chooseAvatarRouter = require('./routes/chooseAvatarRouter')
const indexRouter = require('./routes/indexRouter')
const playRouter = require('./routes/playRouter')
const logoutRouter = require('./routes/logoutRouter')

const app = express()

//eJS
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(session({
    secret: 'Yz2gaP5A4',
    resave: true,
    saveUninitialized: true
}))

app.use(cookieparser())

//To use post
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/subscribe', subscribeRouter)
app.use('/login', loginRouter)
app.use('/chooseAvatar', chooseAvatarRouter)
app.use('', indexRouter)
app.use('/play', playRouter)
app.use('/logout', logoutRouter)

app.use(express.static('public'))

app.listen(3000)