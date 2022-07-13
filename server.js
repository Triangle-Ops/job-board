const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000
const MongoClient = require('Mongodb').MongoClient
app.use(cors())



app.get('/', (req,res)=>{
    res.sendFile(__dirname +'/index.html')
})

app.listen(process.env.PORT || PORT, () => {

    console.log(`server is running, catch it on port ${PORT}!`)
})

