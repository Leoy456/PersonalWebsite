const express = require("express");
const bodyParser = require('body-parser');
const { default: mongoose } = require("mongoose");
const mongooose = require('mongoose')
const cors = require('cors');
const app = express();
require('dotenv').config()

const uri = `mongodb+srv://${process.env.MDB_USER}:${process.env.MDB_PASS}@core.5cmeryf.mongodb.net/?retryWrites=true&w=majority`;


mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {

        console.log("connected to MongoDB")

        app.listen(process.env.PORT, () => {
            console.log(`server started on port ${process.env.PORT}`)
        })
    })
    .catch((error) => console.log(error));
   
//----------------------------------------------------------------------------------//
