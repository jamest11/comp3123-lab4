// COMP 3123 Lab 4

var express = require('express');
var app = express();

const PORT = 8080

// GET request: /hello return "Hello Express JS"
// http://localhost:8080/hello
app.get('/hello', (req, res) => {
    res.send('Hello Express.js');
});

// GET request: /user return  { "firstname":"John", "lastname": "Smith" }. Use Querystring to send values
// http://localhost:8080/user?firstname=John&lastname=Smith
app.get('/user', (req, res) => {
    res.send(req.query);
});

// POST request: /user return  { "firstname":"John", "lastname": "Smith" }. Use path parameter to send values
// http://localhost:8080/user/John/Smith
app.post('/user/:firstname/:lastname', (req, res) => {
    res.send(req.params);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});