//set up a local server for multiSurvey

const http = require("http");
const fs = require("fs");
const path = require("path");

const FILES = {
  ".js": "multiSurvey.js",
  ".css": "multiSurvey.css"
};

const server = http.createServer((request, response) => {
  console.log(`I received the request at url: ${request.url}`);
  const fileName = FILES[path.extname(request.url)] || "index.html";
  let contentType = `text/${path.extname(request.url).replace(".", "") ||
    "html"}`;
  let responseContent = fs.readFileSync(`./${fileName}`);
  response.writeHead(200, { "Content-Type": contentType });
  response.end(responseContent, "utf-8");
});

server.listen(3000);
