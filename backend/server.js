const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const router = require('./routes/book')
app.use('/', router)

module.exports = app

app.listen(3000, () => {
    console.log('Library app listening on port 3000')
})