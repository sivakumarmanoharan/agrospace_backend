const route1Services = async(request) =>{
    try{
        return "Hello, Route 1"
    }
    catch(error){
        console.log(error);
    }
}


module.exports={route1Services}