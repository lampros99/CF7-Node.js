const fs = require('fs');
const http = require('http');
const os = require('os');
const port = 3000;

let osType = os.type();
console.log(osType)

let htmlContent = `<html><h1>Lampros Alexandris</h1><br><hr><h3>Hello, World! Your OS type is ${osType}</h3></html>`


const server = http.createServer((req, res) => {
    console.log("Αρχικά δημιουργούμε το αρχείο index.html με περιεχόμενα το htmlContent");
    fs.writeFile('./index4.html', htmlContent, err => {
        if(err){
            console.log("Problem in writting file")
        }else {
            console.log("Στη συνέχεια διαβάζουμε το αρχείο index.html")
            fs.readFile('./index4.html','utf-8', (err, content) => {
                if(err){
                    console.log(err)
                }
                console.log("Ορίζουμε headers σε αυτο που θα επιστρέψουμε πίσω");
                res.setHeader('Content-Type', 'text/html');
                res.end(content);
            });
        }
    })
})
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})