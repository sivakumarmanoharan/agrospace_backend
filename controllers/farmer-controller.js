const {route1Services}= require('../services/farmer-services')

const route1Controller = async(req,res)=>{
    try
    {
        const result = await route1Services(req);
        res.status(200).send(result)
    }
    catch(error){
        res.status(500);
        console.log(error)
    }
}

module.exports= {route1Controller}