const cors = require('cors')
const express = require('express')
const app = express()
const port = 5001;
    
//Api
 const axios = require('axios')
 
app.use(cors())
 
app.get('/', async (req, res) => { 

    const { data } = await  axios('https://jsonplaceholder.typicode.com/users') 
    console.log(data)
    return res.send('testando com fetch para departamentos do governo ')

})  

 
app.get('/departamentos', (req, res) =>  {
    return  res.send('departamentos e agencias ')
})


app.listen(port, () => {
    console.log(`Executando na porta ${port}`) 
})

//https://jsonplaceholder.typicode.com/users


