const express = require('express')
const bodyParser = require('body-parser')
const Pool = require('pg').Pool

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/welcome', (request, response) => {
  response.send({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})