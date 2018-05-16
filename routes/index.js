var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET home page. */
router.get('/fetchusers', function(req, res, next) {
  console.log("ddssd")
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    console.log("Users", users)
    res.send(JSON.stringify({ users }));
    // res.render('index', {
    //   title: 'Sequelize: Express Example',
    //   users: users
    // });
  });
});

module.exports = router;
