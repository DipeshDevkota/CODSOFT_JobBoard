const express= require('express')
const app=express()
const port=3000;
const cors = require('cors');

const applyroute= require('./routes/applyroute.js')
const postroute= require('./routes/postroute');
const databaseConnection = require('./config/dbConnection.js');
app.get('/',(req,res)=>{
    res.json({message:'SUSHANK CHUTIYA '})
})
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173' // Replace with your frontend's URL
}));
databaseConnection();

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Job Posting API' });
});

app.use('/api/user', applyroute);
app.use('/api/post', postroute);

app.listen(port, (error) => {
    if (!error) {
        console.log(`Server is running on port ${port}`);
    } else {
        console.log('Server error');
    }
});