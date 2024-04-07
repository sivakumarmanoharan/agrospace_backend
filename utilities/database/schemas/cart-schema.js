const mongoose=require('mongoose')
const {Schema, model}=mongoose;

const cartSchema= new Schema({
    cart_id:"String",
    product_id:"String",
    name:"String",
    price:"Number",
    quantity:"Number",
    total:"Number"
})

exports.CartModel=model("cart_data",cartSchema,"cart_data");
