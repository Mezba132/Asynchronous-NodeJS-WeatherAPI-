const express = require("express");
const https   = require("https");
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(require('./router/baseRouter'));

app.get("/", function(req,res) {
  res.json({message:"Try to GET request /weather endpoint"});
})

app.listen(3000, function() {
  console.log("server is Running Smoothly");
})

// async function loadData(url) {
//   return await https.get(url);
// }
