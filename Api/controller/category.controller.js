import '../models/connection.js'//connect db connection
import url from 'url';
import rs from 'randomstring';
import path from 'path';
import jwt from 'jsonwebtoken';
//to link categoryschemamodel
import Categoryschemamodel from '../models/category.model.js';
export const save = async (req, res) => {
  console.log("its");
  //var categoryDetail=req.body;
  // console.log(categoryDetail);
  var cList = await Categoryschemamodel.find();
  //console.log(cList);
  var len = cList.length;
  //console.log(len); 
  var _id = (len == 0) ? 1 : cList[len - 1]._id + 1;
  //categoryDetail = { ...categoryDetail, "_id": _id, "roll": "user", "status": 0, "info": Date() };
  //console.log(categoryDetail);
  // res.send("controler working");

  var caticon = req.files.caticon;
  //console.log(caticon);
  var caticonnm = rs.generate() + "-" + Date.now + "-" + caticon.name;
  var cDetails = { ...req.body, "caticonnm": caticonnm, "_id": _id };
  //console.log(cDetails);
  try {
    await Categoryschemamodel.create(cDetails);
    var _dirname = url.fileURLToPath(new URL(".", import.meta.url));
    var uploadpath = path.join(_dirname, "../../UI/public/assets/uploads/caticons", caticonnm);
    caticon.mv(uploadpath);
    res.status(201).json({ "status": true });
  }
  catch (error) {
    //console.log(error);
    res.status(500).json({ "status": false });
  }
}

// export const login = async (req, res) => {
//   var condition_obj = { ...req.body, "status": 1 };
//   // console.log(condition_obj);
//   var categoryList = await Categoryschemamodel.find(condition_obj);
//   console.log(categoryList);//return array
//   if (categoryList.length != 0) {
//     // res.status(200).json(categoryList);
//     const payload = ("subject", categoryList[0]._id);
//     const key = rs.generate();
//     const token = jwt.sign(payload, key);
//     res.status(200).json({ "token": token, "categoryList": categoryList[0] });
//   }
//   else {
//     res.status(500).json({ "error": "token error" });
//   }
// };
export const fetch = async (req, res) => {
  var condition_obj = url.parse(req.url, true).query;
  // console.log(condition_obj);
  var cList = await Categoryschemamodel.find(condition_obj);
 // console.log(cList);//return array
  if (cList.length != 0) {
    res.status(200).json(cList);
  }
  else {
    res.status(404).json({ "msg": "resource not found" });
  }
};
// export const update = async (req, res) => {
//   var category = await Categoryschemamodel.findOne(JSON.parse(req.body.condition_obj));
//   // console.log(category);
//   if (category) {
//     var update_category = await Categoryschemamodel.updateOne(JSON.parse(req.body.condition_obj), { $set: (JSON.parse(req.body.content_obj)) });
//     //console.log(update_category);
//     if (update_category) {
//       res.status(200).json({ "msg": "category updated" });
//     }
//     else {
//       res.status(500).json({ "msg": "category not found" });
//     }
//   }
//   else {
//     res.status(404).json({ "msg": "resource not found" });
//   }
// };



