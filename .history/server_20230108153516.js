const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000;

//Api
const fetch = require('fetch')

app.use(cors())

app.get('/', (req, res) => { 
    
    return res.send('testando com fetch para departamentos do governo ')
})

 
app.get('/departamentos', async (req, res) =>  {
    const  response = await fetch('https://data.usajobs.gov/api/codelist/agencysubelements')
    const data = await response.json()
    console.log(data) 
    return  res.send('departamentos e agencias ')
})


app.listen(port, () => {
    console.log(`Executando na porta ${port}`) 
})




