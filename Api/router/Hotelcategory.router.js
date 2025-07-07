import express from "express";
const router =express.Router();

// to link user controller on user router 
import *as HotelcategoryController from '../controller/Hotelcategory.controller.js';

router.post("/save",HotelcategoryController.save);
// router.post("/login",HotelcategoryController.login);
router.get("/fetch",HotelcategoryController.fetch);
// router.patch("/update",HotelcategoryController.update);
//router.delete("/delete",HotelcategoryController.delete_user);
export default router;