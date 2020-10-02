let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// User Model
let OwnerSchema = require('../Models/owner');

// CREATE Users
router.route('/CreateUser').post((req, res, next) => {
  OwnerSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Users
router.route('/').get((req, res) => {
  OwnerSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single User
router.route('/EditUser/:id').get((req, res) => {
  OwnerSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//ValidateUser
router.route('/ValUser/:email/:pass').get((req, res) => { 
  OwnerSchema.findOne({email: req.params.email, pass: req.params.pass}, (error, data) => {
    if(error) {        
      throw err;
    }
    else if(data){
      res.json(data);
      console.log("Found");
    } 
    else{
      res.json("new")
      console.log("not found")
    }
  })
})

//ValidateUserSignIp
router.route('/ValUserSignUp/:email/:phone').get((req, res) => { 
  OwnerSchema.findOne({
    $or: [{email: req.params.email}, {phone: req.params.phone}]}, (error, data) => {
    if(error) {        
      throw err;
    }
    else if(data){
      res.json(data);
      console.log("Found");
    } 
    else{
      res.json("new")
      console.log("not found")
    }
  })
})

// Update User
router.route('/UpdateUser/:id').put((req, res, next) => {
  OwnerSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
        console.log(error)
        return next(error)      
    } else {
      res.json(data)
      console.log('User updated successfully !')
    }
  })
})

// Delete User
router.route('/DeleteUser/:id').delete((req, res, next) => {
  OwnerSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;