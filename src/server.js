const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

// conectando com o mongo
db.connect()

// habilita cors
 /* const allowedOrigins= [
     'http://127.0.0.1:5500',
     'http://www.app.com.br'
 ]
 app.use(cors({
     origin: function(origin, callback){
         let allowed = true

         if (!origin) allowed = true
            
         if (!allowedOrigins.includes(origin)) allowed = false 
  
         callback(null, allowed)
     }
 })) */

 app.use(cors({ // DANDO PERMISSÃO APENAS A UMA APLICAÇÃO
      origin: 'http://127.0.0.1:5500'
  })) 
///////////////////////////////////////////////

// habilita server para receber json
app.use(express.json())
 
// definindo as rotas
 app.use('/api', routes)

// executando o servidor 
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))