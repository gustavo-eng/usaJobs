const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('testando')
})

 
app.get('/departamentos', (req, res) =>  {
    res.send('departamentos ')
})


app.listen(3001, () => {
    console.log('executando na porta 5000') 
})




