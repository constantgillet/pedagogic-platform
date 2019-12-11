const express = require('express')
const bodyParser = require('body-parser')

const loginRouter = require('./routes/subscribeRouter');

const app = express()

//eJS
app.set('views', './views')
app.set('view engine', 'ejs')

//To use post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/subscribe', loginRouter);

app.use(express.static('public'));

app.listen(3000)