const express= require('express')
const router=express.Router()
const {loginUtility}=require('../utilities/login-utility')


router.get('/login',loginUtility)


module.exports=router;