const https = require("https");
const fs = require("fs");

https.createServer({
    key : fs.readFileSync(__dirname + "/Users/skywalker721/Desktop/simple-network/https-server/key.pem", "utf-8"),
    certificate : fs.readFileSync(__dirname + "/Users/skywalker721/Desktop/simple-network/https-server/cert.pem", "utf-8"),
},
    function(req, res) {
        res.write("HTTPS Server made.");
        res.end();
    }
).listen(3001);