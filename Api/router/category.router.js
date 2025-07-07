import express from "express";
const router =express.Router();

// to link user controller on user router 
import *as categoryController from '../controller/category.controller.js';

router.post("/save",categoryController.save);
// router.post("/login",categoryController.login);
router.get("/fetch",categoryController.fetch);
// router.patch("/update",categoryController.update);
//router.delete("/delete",categoryController.delete_user);
export default router;