const express = require('express');
const cors = require('cors')
const mongoose  =  require('mongoose')
require('dotenv').config()
const table_Router = require('./router/add_tables')
const urlStatus  = require('./router/urlStatus')


const app = express();

app.use(cors());
app.use(express.json())
app.use('/api/v1/table', table_Router);
app.use('/api/v1/url', urlStatus)

const url = "mongodb+srv://demo:demo@cluster0.esqwqng.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url)
  .then(() => {
    console.log("Connected successfully to server");

    // Do something with the connected database here
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });


app.listen(4000, () => {
    console.log("server is started ")
})