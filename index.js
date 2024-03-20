const express=require('express');
const mongoose=require('mongoose');
const app=express();
const dotenv=require('dotenv')
dotenv.config()
const connectionURL = process.env.MONGODB_CONNECTION_STRING;
const port=process.env.PORT || 5000
const cors= require('cors')
const bodyParser= require('body-parser')

app.use(cors())
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

mongoose.connect(connectionURL).then(()=>
    {
        console.log("Database is connected!!!");
        app.listen(port,()=>{
            console.log(`App listens on port ${port}`);
        })
    }).catch((error)=>console.log(error));

app.use("/farmers",require("./routes/farmer-routes"));
app.use("/users",require("./routes/user-routes"));
