const mongoose=require('mongoose')
const {Schema, model}=mongoose;

const loginSchema= new Schema({
    name:"String",
    email_id:"String",
    type:"String",
    password:"String"
})

exports.LoginModel=model("login_data",loginSchema,"login_data");

