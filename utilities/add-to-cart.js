const {CartModel}  =require("../utilities/database/schemas/cart-schema")

const addToCartService= async(req,res)=>{
    try{
        let cartData = await CartModel.find({cart_id:req.body.cart_id }).select("product_id name price quantity total");
        if(cartData.length===0){
            newData=new CartModel({
                cart_id:req.body.cart_id,
                product_id:req.body.product_id,
                name:req.body.name,
                price:req.body.price,
                quantity:req.body.quantity,
                total:req.body.quantity*req.body.price
            })
            await newData.save()
            res.status(200).send({"res":"Item added"})
        }
        else{
           if(req.body.quantity>0){ let quantity= await CartModel.find({cart_id:req.body.cart_id, product_id:req.body.product_id }).select("price");
            let cartData = await CartModel.findOneAndUpdate({cart_id:req.body.cart_id, product_id:req.body.product_id },{quantity:req.body.quantity, total:req.body.quantity*quantity[0].price},{new:true})
            if (cartData.quantity==req.body.quantity){
                res.status(200).send({"res":"Item updated"})
            }
            else{
                res.status(500).send({"res":"Item not updated"})
            }}
            else{
                await CartModel.findOneAndDelete({cart_id:req.body.cart_id, product_id:req.body.product_id })
                res.status(200).send({"res":"Item deleted"})
            }
        }
        
    }
    catch(error){
        res.status(500).send("Addition failed")
    }
}

const getFromCartService= async(req,res)=>{
    try{
        let cartData = await CartModel.find({cart_id:req.body.cart_id }).select("product_id name price quantity total");
        res.status(200).send({cartData})
    }
    catch(error){
        res.status(500).send("Addition failed")
    }
}
module.exports={addToCartService,getFromCartService}

