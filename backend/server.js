const path = require('path');
const http = require('http');
const express = require('express');

const port = process.env.PORT || 5000

const app = express();

const server = http.createServer(app)

server.listen(port, `server is running on ${port}`)