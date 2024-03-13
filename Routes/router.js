const express=require('express')
const productController=require('../Controllers/productController')
const userController=require('../Controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const wishlistController=require('../Controllers/wishlistController')
const cartContoller=require('../Controllers/cartContoller')

const router=new express.Router()

//getAllProducts
router.get('/all-products',productController.getAllProductController)
//login
router.post('/login',userController.login)
//register
router.post('/register',userController.register)
//view product
router.get('/view-product/:id',productController.getAProductController)
//addToWishlist
router.post('/add-to-wishlist',jwtMiddleware,wishlistController.addToWishlistConroller)
//get wishlist
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlistController)
//remove wishlist
router.delete('/wishlist-remove/:id',jwtMiddleware,wishlistController.removeProductWishlistController)
//addtocart
router.post('/add-to-cart',jwtMiddleware,cartContoller.addToCartController)
//get cart
router.get('/get-cart',jwtMiddleware,cartContoller.getCartController)

// remove cart item
router.delete('/remove-cart/:id', jwtMiddleware, cartContoller.removeCartItemController)

// increment cart
router.get('/cart-increment/:id', jwtMiddleware, cartContoller.incrementItemController)

// decrement cart
router.get('/cart-decrement/:id', jwtMiddleware, cartContoller.decrementItemController)

// empty cart
router.delete('/empty-cart', jwtMiddleware, cartContoller.emptyCartController)


 module.exports=router