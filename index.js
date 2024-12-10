import express from 'express'
// const express = require('express');
import { connect } from 'mongoose'

const app = express()
const port = 5000


connect('mongodb+srv://oopsnail707:8nHlm1d4SjLVl701@boilerplate.kcptr.mongodb.net/', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
}).then(() => console.log('MogoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})