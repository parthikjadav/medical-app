const http = require("http");
const express = require("express");
const connectdb = require("./db/connectDB");
const routes = require("./routes");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

//body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let option = {
  origin: "*",
};

app.use(cors(option));
app.get("/", async (req, res) => {
  res.send("hello world");
})
app.use("/api", routes);

connectdb();

http.createServer(app).listen(5000, () => {
  console.log("server listening on port");
});
