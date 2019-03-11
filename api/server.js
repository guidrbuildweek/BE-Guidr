const express = require('express');
const authRoute = require('../auth/authRoute');
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());



server.get("/", (req, res) => {
    res.json({ message: "👋🌎🌍🌏, root dir sanity check" });
  });

server.use('/', authRoute);


module.exports = server;
