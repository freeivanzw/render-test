const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./db');
const {User} = require('./models');

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', async (req, res) => {
  res.send('Hello World!!!!');
  const createdUser = await User.create({
    email: 'lololasdf',
    password: 'pass',
  })

  console.log(createdUser)

  res.end()
})

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()

