let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// User Model
let CustomerSchema = require('../Models/customer');

// CREATE Users
router.route('/CreateUser').post((req, res, next) => {
    CustomerSchema.create(req.body, (error, data) => {
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
  CustomerSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single User
router.route('/EditUser/:id').get((req, res, next) => {
  CustomerSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//ValidateUser
router.route('/ValUser/:email/:pass').get((req, res) => { 
  CustomerSchema.findOne({
    $and:[{email: req.params.email}, {pass: req.params.pass}]}, (error, data) => {
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
  CustomerSchema.findOne({
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
  CustomerSchema.findByIdAndUpdate(req.params.id, {
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
  CustomerSchema.findByIdAndRemove(req.params.id, (error, data) => {
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