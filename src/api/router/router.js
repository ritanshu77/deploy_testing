const express=require("express");
const router=express.Router();
const multer=require("multer");
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/images')
    },
    filename:function(req,file,cb){
        console.log("--req.file",file.originalname)
        let extName=(file.originalname).split(".").pop();
        cb(null,`${Date.now()}.${extName}`)
    }
});
const upload=multer({storage:storage});

// -----controller--------
const userController=require("../controller/userController");
const productController=require("../controller/productController");

//browser testing function
router.get("/",userController.test);

//--------user-api--testing--
router.post("/create_user",userController.createUser);
router.post("/update_user/:id",userController.updateUser);
router.get("/delete_user/:id",userController.deleteUser);
router.get("/view_all_user/:id?",userController.viewAllUser);

// -------product-api--testing-----

router.post("/add_product",upload.single("image"),productController.addProduct);
router.get("/view_all_product",productController.viewAllProduct);

module.exports=router;