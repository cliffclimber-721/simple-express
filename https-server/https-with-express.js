const https = require("https");
const fs = require("fs");
const express = require("express");

const app = express();

https.createServer({
    key : fs.readFileSync(__dirname + "/Users/skywalker721/Desktop/simple-network/https-server/key.pem", "utf-8"),
    certificate : fs.readFileSync(__dirname + "/Users/skywalker721/Desktop/simple-network/https-server/cert.pem", "utf-8"),
},
    app.use("/", (req, res) => {
        res.send("HTTPS Server made.");
    })
).listen(3001);