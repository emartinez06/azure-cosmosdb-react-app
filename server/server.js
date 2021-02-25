const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
require('dotenv').config();

const app = express();
const port = process.env.APP_PORT || 7500;
const card = require('./routes/index');

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Helmet middleware
app.use(helmet.hidePoweredBy());

//Cors middleware
app.use(cors());

//Routes
app.use('/api', card);

//start server
const server = http.createServer(app);
server.listen(port);

//Log output of server running
console.log(`Server running at port ${port}`);