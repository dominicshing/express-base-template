const express = require('express');
const dotenv = require('dotenv');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

// Parse request body's application/json data
app.use(express.json());

// Parse request body's application/x-www-form-urlencoded data
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', indexRouter);
app.use('/users', authRouter);

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
