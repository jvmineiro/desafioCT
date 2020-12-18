const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    //DESAFIO Routes
    const desafioService = require('../api/desafio/desafioService')
    desafioService.register(router, '/desafio')
}