const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('funcionou ')
})


app.listen(5000, () => {
    console.log('executando')
})




