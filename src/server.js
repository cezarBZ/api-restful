const express = require('express')
// const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

// conectando com o mongo
db.connect()

// habilita server para receber json
app.use(express.json())
 
// definindo as rotas
 app.use('/api', routes)

// executando o servidor 
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))