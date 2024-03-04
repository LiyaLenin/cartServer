const express=require('express')
const productController=require('../Controllers/productController')

const router=new express.Router()
//getAllProducts
router.get('/all-products',productController.getAllProductController)
 module.exports=router