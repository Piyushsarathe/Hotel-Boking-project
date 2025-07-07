import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
// Schema define karna
const categorySchema = mongoose.Schema({
  _id: Number,
  Hnm: {
    type: String,
    required:[true,"Hotel name is required"] , // Ye field required hai
    lowercase : true,
    trim: true
  },
  catnm: {
    type: String,
    required:[true,"category name is required"] , // Ye field required hai
    lowercase : true,
    trim: true
  },
  caticonnm: {type: String,
    required:[true,"caticonnm is required"] , // Ye field required hai
    lowercase : true,
    trim: true
  },
  info:String,
});

//to applly unique validator
mongoose.plugin(mongooseUniqueValidator);

//schema validation 
const Category = mongoose.model('Category_collection', categorySchema);

export default Category;