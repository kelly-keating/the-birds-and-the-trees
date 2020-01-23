const routes = require('./routes/routes')

const express = require('express')
const hbs = require('express-handlebars')

const server = express()


server.engine('hbs', hbs({defaultLayout:'main', extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.static('public'))


server.use('/', routes)


module.exports = server