const express= require('express')
const router=express.Router()
const {loginUtility,signUpUtility}=require('../utilities/login-utility')


router.post('/login',loginUtility)
router.post('/sign-up',signUpUtility)


module.exports=router;