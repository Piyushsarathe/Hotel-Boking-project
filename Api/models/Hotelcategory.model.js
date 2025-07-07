import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
// Schema define karna
const HotelcategorySchema = mongoose.Schema({
  _id: Number,
catnm: {
    type: String,
    required:[true,"category name is required"] , // Ye field required hai
    lowercase : true,
    trim: true
  },
  Hnm: {
    type: String,
    required:[true,"Hotel name is required"] , // Ye field required hai
    // lowercase : true,
    Upercase : true,
    trim: true
  },
  CF: {
    type: String,
    required:[true," cf  is required"] , // Ye field required hai
    // lowercase : true,
    Upercase : true,
    trim: true
  },
  FC1: {
    type: String,
    required:[true,"Fc1 is required"] , // Ye field required hai
    // lowercase : true,
    Upercase : true,
    trim: true
  },
  fc2: {
    type: String,
    required:[true,"fc2 name is required"] , // Ye field required hai
    // lowercase : true,
    Upercase : true,
    trim: true
  },
  MFC: {
    type: String,
    required:[true,"More Facility is required"] , // Ye field required hai
    // lowercase : true,
    Upercase : true,
    trim: true
  },
citynm: {
    type: String,
    required:[true,"city  name is required"] , // Ye field required hai
    lowercase : true,
    trim: true
  },
  Rating: {
    type: String,
    required:[true,"city  name is required"] , // Ye field required hai
    lowercase : true,
    trim: true
  },
  OLDPRICE: {
    type: String,
    required:[true,"city  name is required"] , // Ye field required hai
    lowercase : true,
    trim: true
  },
  NEWPRICE: {
    type: String,
    required:[true,"city  name is required"] , // Ye field required hai
    lowercase : true,
    trim: true
  },
  FEES: {
    type: String,
    required:[true,"city  name is required"] , // Ye field required hai
    lowercase : true,
    trim: true
  },
mobile: {
    type: String,
    required:[true,"mobile name is required"] , // Ye field required hai
    lowercase : true,
    trim: true
  },
  Hiconnm: {type: String,
    required:[true,"Hiconnm is required"] , // Ye field required hai
    lowercase : true,
    trim: true
  },
  info:String,
});

//to applly unique validator
HotelcategorySchema.plugin(mongooseUniqueValidator);

//schema validation 
const HotelcategorySchemaModel = mongoose.model('HotelCategory_collection', HotelcategorySchema);

export default HotelcategorySchemaModel;
