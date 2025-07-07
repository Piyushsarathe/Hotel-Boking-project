//user schema model
import '../models/connection.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import url from 'url';
import sendMail from './email.controller.js';
// to link user schema model
import UserSchemamodel from '../models/user.model.js';

export const save = async (req, res) => {
  var users = await UserSchemamodel.find();//it will return array 
  //console.log(users);//array
  var len = users.length;
  //console.log(len);
  var _id = (len == 0) ? 1 : users[len - 1]._id + 1;
  //console.log(_id);
  var userDetail = req.body;
  userDetail = { ...userDetail, "_id": _id, "role": "user", "status": 0, "info": Date() };
  //console.log(userDetail);//status:0 means user register but not verify
  try {
    var users = await UserSchemamodel.create(userDetail);
    sendMail(users.email, users.password);
    res.status(201).json({ "status": true });
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ "status": false });
  }
}
export const login = async (req, res) => {
  var condition_obj = { ...req.body, "status": 1 };// it is return a obj //status 1 means user verify and also creaate a req as a condition in form of obj
  //console.log(condition_obj);
  var userList = await UserSchemamodel.find(condition_obj);//usrmodel ki method by fault async hoti h
  //console.log(userList);
  if (userList.length != 0) {
    const payload = ("subject", userList[0]._id);
    const key = rs.generate();
    const token = jwt.sign(payload, key);//unick detail store in payload
    res.status(200).json({ "token": token, "userList": userList[0] });
  }
  else {
    res.status(500).json({ "error": "token error" });
  }
}
export const fetch = async (req, res) => {
  var condition_obj = url.parse(req.url, true).query;//fetch karne ke liye condition as a url deni h
  //   console.log(condition_obj);
  var userList = await UserSchemamodel.find(condition_obj);//find the data base on condition
  // console.log(userList);//return array
  if (userList.length != 0)
  //if(userList)  
  {
    res.status(200).json(userList);
  }
  else {
    res.status(404).json({ "msg": "resource not found" });
  }
}
export const update = async (req, res) => {
  //var user =await UserSchemamodel.findOne(JSON.parse(req.body.condition_obj));
  var user = await UserSchemamodel.findOne(req.body.condition_obj);//this changes after update threw Ui
  //console.log(user);
  if (user) {
    //var update_user = await UserSchemamodel.updateOne(JSON.parse(req.body.condition_obj),{$set:(JSON.parse(req.body.content_obj))});
    var update_user = await UserSchemamodel.updateOne(req.body.condition_obj, { $set: req.body.content_obj });
    //console.log(update_user);
    if (update_user) {
      res.status(200).json({ "msg": "user updated successfully" });
    }
    else {
      res.status(500).json({ "msg": "user not updated successfully" });
    }
  }
  else {
    res.status(404).json({ "msg": "resource not found" });
  }
}
export const delete_user = async (req, res) => {
  //var user =await UserSchemamodel.findOne(JSON.parse(req.body.condition_obj));
  var user = await UserSchemamodel.findOne(req.body.condition_obj);//this is usable for ui delete call by manage user
  //console.log(user);
  if (user) {
    //var delete_user = await UserSchemamodel.deleteOne(JSON.parse(req.body.condition_obj));
    var delete_user = await UserSchemamodel.deleteOne(req.body.condition_obj);
    //console.log(delete_user);
    if (delete_user) {
      res.status(200).json({ "msg": "user deleted successfully" });
    }
    else {
      res.status(500).json({ "msg": "user not delete successfully" });
    }
  }
  else {
    res.status(404).json({ "msg": "resource not found" });
  }
}

