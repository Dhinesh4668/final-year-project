require('dotenv').config()
const express = require('express');
const DataBase = require('./config/Database/Db');
const cors = require('cors');
const { logger } = require('./middleware/logger');

const app = express();
const port = process.env.PORT
app.use(express.json());
app.use(cors());
app.use(logger)
DataBase();

app.listen(port, ()=> {
    console.log('``````````````````server started````````````````````````````\n');
    console.log(`\t\thttp://localhosr:${port}\n`)
})