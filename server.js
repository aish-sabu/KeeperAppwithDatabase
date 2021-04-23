//jshint esversion:6
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
//HTTP request logger
app.use(morgan('tiny'));

const PORT = process.env.PORT || 8080;

const routes = require("./routes/api");

mongoose.connect("mongodb://localhost:27017/KeeperDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log("Mongoose is connected.");
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api', routes);

app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});
