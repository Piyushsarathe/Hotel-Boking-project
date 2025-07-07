//create database connection
import mongoose from 'mongoose';
const url = "mongodb://localhost:27017/HMS";
mongoose.connect(url);
console.log("Database conected successfully");