const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res)=>{
  console.log("Received request for " + req.url);
  res.send("Hello World!");
});

app.listen(PORT, ()=>{console.log("listening on port " + PORT);});

