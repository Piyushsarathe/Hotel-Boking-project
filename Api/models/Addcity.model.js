import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
// Schema define karna
const CitycategorySchema = mongoose.Schema({
  _id: Number,
  // catnm: {
  //   type: String,
  //   required:[true,"category name is required"] , // Ye field required hai
  //   lowercase : true,
  //   trim: true
  // },
  citynm: {
    type: String,
    required:[true,"city name is required"] , // Ye field required hai
    // lowercase : true,
    upercase : true,
    trim: true
  },
  cityiconnm: {type: String,
    required:[true,"cityiconnm is required"] , // Ye field required hai
    lowercase : true,
    trim: true
  },
  info:String,
});

//to applly unique validator
mongoose.plugin(mongooseUniqueValidator);

//schema validation 
const Category = mongoose.model('cityCategory_collection', CitycategorySchema);

export default Category;