const express = require('express')
const routes = express.Router()
const CustomersController = require('./controllers/CustomersController')
routes.get("/customers",CustomersController.index)
module.exports = routes
