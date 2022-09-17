const express = require('express')
const router = require('./route/provatp6.router')

const app = express()
app.use(express.json())
app.use('/', router)

app.listen(8087, () => console.log('Server up on port 8087!'))