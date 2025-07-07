//validator to ensure that certain fields
import mongoose from 'mongoose';
import mongooseUniqueValidator from "mongoose-unique-validator";
const userSchema = mongoose.Schema({
    _id: Number,
    name: { type: String, require: [true, "Name is required"], trim: true, lowercase: true },
    email: { type: String, require: [true, "Email is required"], unique: true, trim: true, lowercase: true },
    password: { type: String, require: [true, "Password is required"], trim: true, maxlength: 10, minlength: 5 },
    address: { type: String, require: [true, "Address is required"], trim: true, },
    mobile: { type: Number, require: [true, "Mobile is required"], trim: true, maxlength: 10, minlength: 10 },
    city: { type: String, require: [true, "City is required"] },
    gender: { type: String, require: [true, "gender is required"] },
    role: String,
    status: Number,
    info: String,
});
//to applly unique validator
mongoose.plugin(mongooseUniqueValidator);
//schema validation 
const UserSchemamodel = mongoose.model('User_collection', userSchema);
export default UserSchemamodel;
