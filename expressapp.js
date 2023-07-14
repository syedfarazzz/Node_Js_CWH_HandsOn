const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const data = fs.readFileSync('index.html');
        res.send(data.toString());
})

app.get('/contact', (req, res) => {
  res.send('<h1> This is Faraz</h1> <p> Hey  </p>')
})

app.get('/about', (req, res) => {
  res.send('<h1> This is About</h1> <p> Hey there About Page </p>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})