const express = require ('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors  = require('cors')
//Init app
const app = express()

//Init db
const uri = 'mongodb+srv://smartstaff:dIgNoRKQ5tKLsp1Q@cluster0.xfbdl.mongodb.net/smartstaff?retryWrites=true&w=majority'

mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true})
app.use(express.json())

app.use(cors())

requireDir('./src/models')
app.use('/api',require('./src/routes'))
app.listen(3005)
module.exports = app