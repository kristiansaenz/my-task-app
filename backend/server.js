const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ATLAS_URI holds my db connection url
const uri = process.env.ATLAS_URI;

// this is to deal with mongoDB updates
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

// connect to database
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("database connection was successful");
})

// start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})