- Routes
- Express Routes

https://api.dictionary.com/

GET https://api.dictionary.com/words
GET https://api.dictionary.com/pictures

- POST
- GET

const express = require("express");

const app = express();

app.get("/posts", (request, response, next) => {})
app.post("/posts/new", (request, response, next) => {})

GET http://localhost:3000/posts
POST http://localhost:3000/posts
PATCH http://localhost:3000/posts/first-post/edit

app.listen(3000, () => console.log("server is up and running"));

button.addEventListener("click", function(event) {})

const http = require("http");

const server = http.createServer((request, response) => {
const url = request.url;
if(url === "/posts") {
if(request.method === "GET") {

    }

}
// do whatever you please......
});

server.listen(3000, () => console.log("server is up and running"))

app.post("/posts/new", (request, response, next) => {})

GET https://api.example.com/dashboard

axios.default.baseUrl = "https://api.example.com"

const response = await axios.get("/dashboard")
console.log(response.data);





const express = require("express");


https://github.com/mustapha3341/nodejs-workshop-app.git