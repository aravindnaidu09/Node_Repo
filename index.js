require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());

const mongostring = process.env.DATABASE_URL;
mongoose.connect(mongostring);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected!');
});

app.use('/api', routes)

app.listen(3000, () => {
    console.log(`server started at ${3000}`);
});