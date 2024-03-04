const products=require('../Models/productModel')
//getallproducts
exports.getAllProductController=async(req,res)=>{
    try{
        const result=await products.find()
        res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)
    }
}