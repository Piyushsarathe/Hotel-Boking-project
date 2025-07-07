import express from "express";
const router =express.Router();

// to link user controller on user router 
import *as userController from '../controller/user.Controller.js';

router.post("/save",userController.save);
router.post("/login",userController.login);//there is usercontroler is a instanc of al function 
router.get("/fetch",userController.fetch);
router.patch("/update",userController.update);
router.delete("/delete",userController.delete_user);
export default router;