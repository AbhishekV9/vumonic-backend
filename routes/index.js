const express=require("express");
const router= express.Router()

const userController=require("../contoller/userController")
router.get("/",userController.home);
router.get("/token",userController.generateToken);
router.get('/getfile',userController.getFile)

module.exports=router;