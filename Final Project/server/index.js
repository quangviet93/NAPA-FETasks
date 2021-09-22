const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();

// Cho phép gọi từ Javascript vô server.
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./config/db');

// import authRouter từ routes.

const authRouter = require('./routes/auth');
const postRouter = require('./routes/post')

dotenv.config();


//connect DB.
db.connect();
app.use('/auth', authRouter)
app.use('/post', postRouter)



const PORT = 3100;

app.listen(PORT, () => console.log(`Start server ${PORT}`));