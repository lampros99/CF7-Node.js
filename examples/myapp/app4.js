const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/user', express.static('files'));
app.get('/user', (req, res)=> {
    console.log(req.body)

let firstname = req.body.firstname;
let lastname = req.body.lastname;
let age = req.body.age
let email = req.body.email
let sex = req.body.sex;

res.send('Name: ' + firstname + ', Surname: '+ lastname + ', Age: ' + age +
    ', Email: ' + email + ', Sex: ' + sex 
 )

 console.log(JSON.stringify(req.headers));
 console.log("Content-Type>>", res.get('Content-type'))

});

app.post('/user', (req, res) => {
    console.log(req, res)

let firstname = req.body.firstname;
let lastname = req.body.lastname;
let age = req.body.age;
let email = req.body.email;
let sex = req.body.sex;

res.send('Name: ' + firstname + ' Surname: ' + lastname + ' Age: ' + age + ' Email: ' + email + ' Sex: ' + sex)
console.log(JSON.stringify(req.headers));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})