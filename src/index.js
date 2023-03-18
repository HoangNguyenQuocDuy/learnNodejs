import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config();

const app = express()
const port = process.env.port || 8080;

configViewEngine(app)

app.get('/about', (req, res) => {
  res.send('Hello World!')
})
  
app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})