const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const cors=require('cors');
const connectDatabase = require('./config/db');

const studentRoutes = require('./routes/studentRoute');
const adminRoutes = require('./routes/adminRoute');

const app = express();
dotenv.config({path: path.join(__dirname, 'config' ,'config.env')})

app.use(bodyParser.json());
app.use(cors({ origin : process.env.ORIGIN, credentials : true }));
connectDatabase();

app.use('/api/student',studentRoutes);
app.use('/api/admin', adminRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server listening to Port ${process.env.PORT}`
    );
})