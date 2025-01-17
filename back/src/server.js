require('dotenv').config()

const express = require('express')
const routes = require ("./routes")
require('./database')
require('./models/User')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use(routes)

server.listen(5000, () => { 
  console.log('Server run')
})