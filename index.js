const express = require("express");
const path = require("path");
const MongoClient = require("mongodb");
const mongoose = require("mongoose");
const cookieparser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");


const app = express();


app.set("port",process.env.port || 3001);
app.set("views",path.join(__dirname,"views"));
app.set("view engine" ,"ejs");

app.use("/",require("./routes/web"));
app.use("/api",require("./routes/api"));


app.listen(app.get("port"), function() {
    console.log(`Server running on port` + app.get("port"));
  });