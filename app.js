const express = require('express');
const path = require('path');
const app = express();

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo');
});

app.get ("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get ("/register", (req, res) => {
    res.sendFile(__dirname + "/views/register.html");
});

app.get ("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});

app.use(express.static(path.join(__dirname, 'public')));
app.set('puerto', process.env.PORT || 3000);