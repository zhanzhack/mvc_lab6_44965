


const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static('public')); 
app.set('view engine', 'ejs'); 
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true })); 
app.use(bodyParser.urlencoded({ extended: true })); 

const errorRoutes = require('./routes/error');
app.use("*", errorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));