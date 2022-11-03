var env = require('./env/env')

const express = require('express')
const app = express()
const port = env.PORT;


app.get('/', (req, res) => {
  res.send('Test deneme')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})