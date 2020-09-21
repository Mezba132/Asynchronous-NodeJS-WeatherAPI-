const express = require("express");
const https   = require("https");
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
const baseRouter = require('./router/baseRouter');
app.use(baseRouter);

// app.get("/", function(req,res) {
//   // const url = "https://api.openweathermap.org/data/2.5/weather?q=Dhaka,BD&appid=a5f490d51fc479a6f031e33819698f78&units=metric";
//   let url = "http://api.openweathermap.org/data/2.5/weather?q=Dhaka,BD&appid=a5f490d51fc479a6f031e33819698f78&units=metric";
//
//
// /* returning promise instead of callback */
//   axios.get(url)
//     .then(response => res.json(response.data))
//     .catch(err => res.send(err));
//
//
//   /* Treditional Callback Example *
//   // https.get(url, function(response) {
//   //   console.log(response);
//   // })
//
//   /* Arrow Function shorthand */
//   // https.get(url, (response) => res.send(response));
//
//   // https.get(url, (response) => {
//   //   if(!response)
//   //     res.send("error occurred")
//   //   else
//   //     res.send(response)
//   // });
//
//
//   // axios.get(url)
//   // .then(response => res.send(response))
//   // .catch(err => res.send(err));
//
//   /*fetching via async function */
//   // loadData(url)
//   // .then(response => res.send(response))
//   // .catch(err => res.send(err));
//
//   // res.send("Okay Carry On");
// })

app.listen(3000, function() {
  console.log("server is Running Smoothly");
})

// async function loadData(url) {
//   return await https.get(url);
// }
