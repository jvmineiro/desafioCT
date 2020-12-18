const Desafio = require('./desafio')

Desafio.methods(['get', 'post', 'put', 'delete'])
Desafio.updateOptions({new: true, runValidators: true})

module.exports = Desafio