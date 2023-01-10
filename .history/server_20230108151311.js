const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    
    fetch('https://data.usajobs.gov/api/codelist/agencysubelements')
    .then((response) => response.json())
    .then((dados) => res.send(dados.data))
})


app.get('/departamentos', (req, res) => {
    res.send('departamentos ')
})


app.listen(5000, () => {
    console.log('executando na porta 5000') 
})




