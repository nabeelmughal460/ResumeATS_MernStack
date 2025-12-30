const express = require('express');
const app = express();
const PORT=4000;
const cors = require('cors');
require('./conn');
const userroute= require('./Routes/userroute');
const resumeroute= require('./Routes/resumeroute');
// app.get('/', (req, res) => {
//   res.send({message: 'Hello from backend 😎'});
// });
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
app.use(express.json()); 
app.use('/api/resume',resumeroute);  
app.use('/api/user',userroute);
app.listen(PORT,()=>{
    console.log("backend is running on Port 😀");
    
})


