const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const router = require("./utils/routes")

server = express();

server.use(express.json()) //funcion que transforma json en objeto de JS
server.use(cors());
server.use(morgan("dev"));
server.use(router);

module.exports = server;