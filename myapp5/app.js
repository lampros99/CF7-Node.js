import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  const { username, password } = req.body;

  if (
    (username === "user" && password === "password123") ||
    (username === "user@example.gr" && password === "password123")
  ) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.send(`
      <h1>Login Failed</h1>
      <p>Invalid username or password.</p>
      <a href="/">Try again</a>
    `);
  }
});

app.listen(port, () => {
  console.log(`Successfully listening on port ${port}`);
});
