const express = require('express'); 
const dotenv = require('dotenv').config(); 

const app = express()
const port = 5000; 

app.use("/api/contacts", require("./routes/contactRoutes"))


app.get('/', (req,res)=>{
    res.status(200).send('home page'); 
})
 

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`); 
})