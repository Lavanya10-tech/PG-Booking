let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// User Model
let OwnerPostSchema = require('../Models/ownerPost');

// CREATE Users
router.route('/CreatePost').post((req, res, next) => {
    OwnerPostSchema.create(req.body, (error, data) => {
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
    OwnerPostSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//READ SOME POSTS
router.route('/GetIndividual/:id').get((req, res) => { 
  OwnerPostSchema.find({id: req.params.id}, (error, data) => {
    if(error) {        
      throw err;
    }
    else{
      res.json(data);      
    } 
  })
})

// Get Single User
router.route('/EditPost/:id').get((req, res) => { 
    OwnerPostSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update User
router.route('/UpdatePost/:id').put((req, res, next) => {
    OwnerPostSchema.findByIdAndUpdate(req.params.id, {
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
router.route('/DeletePost/:id').delete((req, res, next) => {
    OwnerPostSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

// Delete Many Posts
router.route('/DeleteManyPost/:id').delete((req, res, next) => {
  OwnerPostSchema.deleteMany({id: req.params.id}, (error, data) => {
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