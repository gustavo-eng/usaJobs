const cors = require('cors')
const express = require('express')
const app = express()
const port = 5000;
    
//Api
 const axios = require('axios')
 
app.use(cors())
 
app.get('/', async (req, res) => {  
    const response = await  axios('https://jsonplaceholder.typicode.com/users') 
    console.log(response.data)       
    return res.json(response.data) 
})  



app.get('/departamentos', (req, res) =>  {
    // axios.post(`http://jsonplaceholder.typicode.com/posts/1000`,{
    //             "userId": 100,
    //             "id": 100,
    //             "title": "OIOIOIOII",
    //             "body": "CORPO"
    //         }).then(res => console.log(res))
    return  res.send('departamentos e agencias ')
})


app.listen(port, () => {
    console.log(`Executando na porta ${port}`) 
})

//https://jsonplaceholder.typicode.com/users


