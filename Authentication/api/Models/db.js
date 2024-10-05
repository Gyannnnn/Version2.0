const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;


mongoose.connect(DB_URL)
.then(()=>{
    console.log("Successfully Connected To The database");
})
.catch((err)=>{
    console.log("Mongo DB Connection Error",err);
})