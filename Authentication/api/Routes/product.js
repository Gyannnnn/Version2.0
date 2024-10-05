const ensureAuthenticated = require("../Middlewares/Auth");

const router = require("express").Router();



router.get("/",ensureAuthenticated,(req,res)=>{
    res.status(200).json([
        {
            name:"Mobile",
            price:"20k"
        },
        {
            name:"Tv",
            price:"40k"
        }

    ])
})
module.exports = router;