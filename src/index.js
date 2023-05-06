const express = require('express');
const dotenv = require('dotenv');
const {User} = require('./models');

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', async (req, res) => {
  res.send('Hello World!!!!');
  const dataUser = await User.create({
    email: 'user@rew.sdf',
    password: '12312'
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})