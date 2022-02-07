const router = require('express').Router()

const ProductController = require('../controllers/products')

// verbos http 
// GET - obter dados
// POST - enviar/receber dados
// PUT - atualizar dados
// DELETE - remover dados

router.get('/products/:id?', ProductController.get) //parametro opcional
// router.post('/products', ProductController.post)
// router.put('/products/:id', ProductController.put)
// router.put('/products/:id', ProductController.put)

module.exports = router