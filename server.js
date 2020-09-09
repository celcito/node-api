const express = require ('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
//Init app
const app = express()
//Init db
const uri = 'mongodb+srv://smartstaff:dIgNoRKQ5tKLsp1Q@cluster0.xfbdl.mongodb.net/smartstaff?retryWrites=true&w=majority'

mongoose.Promise = global.Promise
mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true})
requireDir('./src/models')
app.use('/api',require('./src/routes'))
app.listen(3005)
