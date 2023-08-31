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


//valores stardes "nome, idade e data de nascimento"
let db = [
    { '1': { nome: 'Uadson Mota', idade: '30', dt_nacimento: '16/16/1993'} },
    { '2': { nome: 'Natalia Mota', idade: '28', dt_nacimento: '15/11/1995'} },
    { '3': { nome: 'Manuella Mota', idade: '2', dt_nacimento: '31/12/2021'} }, 
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

