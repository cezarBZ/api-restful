const router = require('express').Router()

const ProductController = require('../controllers/products')

// verbos http 
// GET - obter dados
// POST - enviar/receber dados
// PUT - atualizar dados
// DELETE - remover dados

router.get('/products', ProductController.get)
// router.post('/products', ProductController.post)
// router.put('/products/:id', ProductController.put)
// router.put('/products/:id', ProductController.put)

module.exports = router