const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('testando')
    
})

fetch('https://data.usajobs.gov/api/codelist/agencysubelements')
    .then((response) => response.json())
    .then((dados) => console.log(dados.data))
    .catch((err) => console.error(err))

app.get('/departamentos', (req, res) => {
    res.send('departamentos ')
})


app.listen(5000, () => {
    console.log('executando na porta 5000') 
})




