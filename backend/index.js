const express = require('express');
const app = express();
const PORT=4000;
const cors = require('cors');
const path =require('path');
require('./conn');
const userroute= require('./Routes/userroute');
const resumeroute= require('./Routes/resumeroute');
// app.get('/', (req, res) => {
//   res.send({message: 'Hello from backend 😎'});
// });
app.use(cors({
    credentials: true,
    // origin: 'http://localhost:5173',for local server
    origin:"*" //for vercel deployment

}));
app.use(express.json()); 
app.use('/api/resume',resumeroute);  
app.use('/api/user',userroute);
 /*
// serve static files from the React frontend app  build folder
app.use(express.static(path.join(__dirname,"build")));
// handle React routing, return  index.js all requests to React app   
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'));
});

app.listen(PORT,()=>{
    console.log("backend is running on Port 😀");
    
})*/ //for local server


module.exports=app;

