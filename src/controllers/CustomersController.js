const mongoose = require ('mongoose')
const Customers = require('../models/Customers')
module.exports =  {
    async index(req,res){
        const {page =1} = req.query
        const customers = await Customers.paginate({},{page,limit:10})
        return  res.json(customers)
    },
}
