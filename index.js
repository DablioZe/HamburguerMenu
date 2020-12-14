/* a basic server with express */

const express = require("express");
const app = express();
const http = require("http").createServer(app);

app.use(express.static("./"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

http.listen(3000)