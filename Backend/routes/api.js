var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");
var Message = require("../models/message");

const { MongoClient } = require("mongodb");
const uri ="mongodb://localhost/messages-app";
const client = new MongoClient(uri);
async function findMessages() {
  let messagesList;
  try {
    await client.connect();
   const database = client.db("messages-app");
   const messages = database.collection("messages");
    messagesList = await Message.find();
 } finally {
  await client.close();
 }
 return messagesList;
}

router.post('/signup', (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.firstName || !req.body.lastName) {
      res.json({success: false, msg: 'Please fill in all the required fields.'});
    } else {
      var newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      });
      // save the user
      newUser.save((err) => {
        if (err) {
          return res.json({success: false, msg: 'User already exists.'});
        }

        res.json({success: true, user: newUser  ,msg: 'Successful created new user.'});
      });
    }
  });

  router.post('/signin',(req, res) => {
    User.findOne({
      email: req.body.email
    }, (err, user) => {
      if (err) throw err;
  
      if (!user) {
        res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.sign(user.toJSON(), config.secret);
            // return the information including token as JSON
            res.json({success: true, user: user, token: 'JWT ' + token});
          } else {
            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
    });
  });

  router.post('/add-message', (req, res) => {
    if (!req.body.message || !req.body.senderId) {
      res.json({success: false, msg: 'Please fill in all the required fields.'});
    } else {
      var newMessage = new Message({
        message: req.body.message,
        destinationId: req.body.destinationId,
        senderId: req.body.senderId
      });
      // save the message
      newMessage.save((err) => {
        if (err) {
          return res.json({success: false, msg: 'Failed to add message.'});
        }

        res.json({success: true, message: newMessage ,msg: 'Successful added new message.'});
      });
    }
  });
  router.get('/find-users',(req, res) => {
    User.find(
    {}, (err, users) => {
      if (err) throw err;
  
      if (!users) {
        res.status(404).send({success: false, msg: 'No users found...'});
      } else {
        res.status(200).send({success: true, users})
      }
    });
  });
  router.get('/find-messages',(req, res) => {
    Message.find(
    {}, (err, messages) => {
      if (err) throw err;
  
      if (!messages) {
        res.status(404).send({success: false, msg: 'No new messages...'});
      } else {
        res.status(200).send({success: true, messages})
      }
    });
  });


  module.exports = router;