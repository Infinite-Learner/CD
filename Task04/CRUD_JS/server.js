const express = require('express');
const path = require('path')
const cors = require('cors')
const bodyParser = require("body-parser");

const app = express()

const db = require("./db/dbconfig");
const postRoute = require("./routes/postRoutes")

app.use(cors())
app.use(bodyParser.json())

app.use("/posts",postRoute);
app.get("/",(req,res)=>{
    res.send("Hi");
})


app.listen(3001,()=>{
    console.log("server is on");
    
})