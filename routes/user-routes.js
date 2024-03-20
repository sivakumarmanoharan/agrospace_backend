const express= require('express')
const router=express.Router()
const {loginUtility}=require('../utilities/login-utility')


router.post('/login',loginUtility)


module.exports=router;