const express = require('express');
const app = express();


const fs = require('fs');
const http = require('http');
const os = require('os');


let osType = os.type();

app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/user', (req, res) => {
    let query = req.query;
    console.log(query)

    let name = query.name;
    let surname = query.surname;
    let age = query.age;

    let length = Object.keys(query).length;
    console.log("Length: " + length)

    res.send("Name: " + name + ", Surname: " + surname + ", Age: " + age);
})


app.listen(3000, () => {
console.log(`listening port 3000`)
})