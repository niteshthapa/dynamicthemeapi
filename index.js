const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('./db.js');
const routes = require('./routes/routes');
let port = process.env.PORT || 3000;
const app = express();
app.use(bodyparser.json());
app.use(cors());
app.listen(port,()=> console.log("server started"))
app.use('/themes',routes)


