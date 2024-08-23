const greet = require("greet-creativec");
const express = require("express");

const app = express();
const PORT = 8085;

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}/`)
)

app.get('/', (req, res) => {
    const name = req.query.name ? req.query.name : 'John smith';
    const message = greet(name)
    return res.status(200).send(message)
});
