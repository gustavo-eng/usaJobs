const cors = require('cors')
const express = require('express')
const app = express()
const port = 3001;

//Api
 const axios = require('axios')
 
app.use(cors())

app.get('/', (req, res) => { 

    const {data} =  axios('https://jsonplaceholder.typicode.com/users') 
    return res.send('testando com fetch para departamentos do governo ')

})

 
app.get('/departamentos', (req, res) =>  {
    return  res.send('departamentos e agencias ')
})


app.listen(port, () => {
    console.log(`Executando na porta ${port}`) 
})

//https://jsonplaceholder.typicode.com/users


