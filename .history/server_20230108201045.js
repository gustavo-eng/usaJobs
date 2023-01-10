const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000;

//Api
 
 
app.use(cors())

app.get('/', (req, res) => { 
    return res.send('testando com fetch para departamentos do governo ')
})

 
app.get('/departamentos', (req, res) =>  {
    return  res.send('departamentos e agencias ')
})


app.listen(port, () => {
    console.log(`Executando na porta ${port}`) 
})

//https://jsonplaceholder.typicode.com/users


