const http = require("http");
const express = require("express");
const connectdb = require("./db/connectDB");
const routes = require("./routes");
const app = express();
const cors = require("cors");

//body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api",routes)

connectdb()

app.use(cors());

http.createServer(app).listen(5000,()=>{
    console.log("server listening on port")  
})