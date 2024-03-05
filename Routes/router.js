const express=require('express')
const productController=require('../Controllers/productController')
const userController=require('../Controllers/userController')

const router=new express.Router()
//getAllProducts
router.get('/all-products',productController.getAllProductController)
//login
router.post('/login',userController.login)
//register
router.post('/register',userController.register)

 module.exports=router