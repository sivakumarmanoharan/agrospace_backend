const express= require('express')
const router=express.Router()
const {loginUtility,signUpUtility}=require('../utilities/login-utility')
const { addToCartService,getFromCartService } = require('../utilities/add-to-cart')


router.post('/login',loginUtility)
router.post('/sign-up',signUpUtility)
router.post("/add-to-cart",addToCartService)
router.post('/get-from-cart',getFromCartService)


module.exports=router;