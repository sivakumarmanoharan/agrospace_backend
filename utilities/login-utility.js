const { LoginModel } = require('./database/schemas/login-schema')
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv')
dotenv.config()
const saltRounds = process.env.SALT_COUNT;
const farmers_burl = process.env.BASE_URL_FARMERS
const users_burl = process.env.BASE_URL_USERS

const loginUtility = async (req, res) => {
    try {
        if ((req.body.type == "user" && req.baseUrl == users_burl) || 
        (req.body.type == "farmer" && req.baseUrl == farmers_burl)) {
            let userData = await LoginModel.find({ email_id: req.body.emailId, password: req.body.password, type:req.body.type }).select('email_id password type');
            userData = (userData.length > 0) ? JSON.parse(JSON.stringify(userData)) : [];
            if (userData.length > 0 && userData[0].email_id && userData[0].password && userData[0].type) {
                const hash = await bcrypt.hash(userData[0].password, Number(saltRounds));
                const isMatch = await bcrypt.compare(req.body.password, hash)
                if (isMatch)
                    res.status(200).send(true);
                else
                    res.status(401).send(false);
            }
            else {
                res.status(401).send(false)
            }
        }
        else{
            res.status(401).send("Unauthorized!!!")
        }
    }
    catch (error) {
        console.log(error);
    }
}

    const signUpUtility= async(req,res)=>{
        try{
            if ((req.body.type == "user" && req.baseUrl == users_burl) || 
        (req.body.type == "farmer" && req.baseUrl == farmers_burl)){
            let signUpData={
                "name":req.body.username,
                "email_id":req.body.email_id,
                "password":req.body.password,
                "type":"user"
            }
            await LoginModel.save(signUpData)
        }
        else{
            res.status(401).send("Unauthorized!!!")
        }
        }
        catch(error){
            console.log(error)
        }
    }

module.exports = { loginUtility,signUpUtility }