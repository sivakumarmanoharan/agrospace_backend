const express= require('express')
const router=express.Router()
const {route1Controller}=require('../controllers/farmer-controller')
const {loginUtility}=require('../utilities/login-utility')

router.get('/route1',route1Controller)

router.get('/login',loginUtility)

router.get("/route2", (req,res)=>{
    res.send("Sample Route 2")
})

module.exports=router;