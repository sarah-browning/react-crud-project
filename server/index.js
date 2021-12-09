const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const server = express();
const port = 3001;

server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

//routes
server.get('/', (req, res) =>
    res.send("Hello!"));
server.use('/', routes);

server.listen(port, () => console.log(`Express running on port: ${port}...`));