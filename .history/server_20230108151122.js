const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('funcionou bem ')
    fetch('https://data.usajobs.gov/api/codelist/agencysubelements')
    .then((res) => console.log(res.json()))
})


app.get('/departamentos', (req, res) => {
    res.send('departamentos ')
})


app.listen(5000, () => {
    console.log('executando na porta 5000') 
})




