const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.get('/todos', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      res.send(response.data)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${3000}`)
})
