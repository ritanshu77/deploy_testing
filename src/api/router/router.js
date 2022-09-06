const express=require("express");
const router=express.Router();
const userController=require("../controller/userController");
const productController=require("../controller/productController");
//browser testing function
router.get("/",userController.test);


router.post("/create_user",userController.createUser);
router.post("/update_user/:id",userController.updateUser);
router.get("/delete_user/:id",userController.deleteUser);
router.get("/view_all_user/:id?",userController.viewAllUser);

// -------product--------

router.post("/add_product",productController.addProduct);
router.get("/view_all_product",productController.viewAllProduct);

module.exports=router;