require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('src/client/views'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})


app.listen(PORT,
    () => console.log(`Dots app listening on port ${PORT}`));