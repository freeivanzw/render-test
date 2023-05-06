const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!!!!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})