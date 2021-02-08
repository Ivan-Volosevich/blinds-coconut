const express = require('express');
const app = express();
const { Client } = require('pg');
const bodyParser = require('body-parser');

app.listen(3001, function() {
    console.log('success');
});