import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoutes from './route/web';
import connection from './configs/connectDB'
require('dotenv').config();

const app = express()
const port = process.env.port || 8080;

configViewEngine(app)

initWebRoutes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})