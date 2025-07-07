import express from "express";
const router =express.Router();

// to link user controller on user router 
import *as AddcityController from '../controller/Addcity.controller.js';

router.post("/save",AddcityController.save);
// router.post("/login",HotelcategoryController.login);
 router.get("/fetch",AddcityController.fetch);
// router.patch("/update",HotelcategoryController.update);
//router.delete("/delete",HotelcategoryController.delete_user);
export default router;