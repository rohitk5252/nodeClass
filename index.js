require('dotenv').config()

const express = require('express');
const app = express();
var cors = require('cors')
const mongoose = require('mongoose');
const userRoutes = require('./routes/user')


app.use(express.json());
// for cross origin requests
app.use(cors())

app.use((req ,res ,next)=>{
    console.log(req.path, req.method);
    next();
})

// Routes 
app.use('/api/user', userRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('Connected to db');
    })
    .catch((err)=>{
        console.log(err);
    })
    
app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
});