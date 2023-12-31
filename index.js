const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const req = require('express/lib/request')
const res = require('express/lib/response')



const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extend: false}))
app.use(express.json())
app.use(cors())


//valores stardes "nome e idade"
let db = [
    { '1': { nome: 'Uadson Mota', idade: '30'} },
    { '2': { nome: 'Natalia Mota', idade: '28'} },
    { '3': { nome: 'Manuella Mota', idade: '2'} },
]

    //buscar dados
    app.get('/', (req, res) => {
        return res.json(db)
    })

    //Inserir dados
    app.post('/add', (req, res) => {
        const body = req.body

        if (!body)
            return res.status(400).end()

        db.push(body)
        return res.json(body)
    })


//ligar servidor
app.listen(21262, () => {
    console.log('express started at http:localhost:21262')  //http procolo de internet GET: buscar dados, POST: inserir dados, POT: modificar dados, DELITE: deletar dados
})

