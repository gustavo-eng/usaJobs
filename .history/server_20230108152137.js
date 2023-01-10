const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000;

//Api
const fetch = require('fetch')

app.use(cors())

app.get('/', (req, res) => {
    res.send('testando com fetch agora ')
})

 
app.get('/departamentos', (req, res) =>  {

    res.send('departamentos ')
})


app.listen(5000, () => {
    console.log('executando na porta 3000') 
})




