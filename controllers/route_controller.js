/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// // make our tables; force:true drops the table if it already exists
// .then(function() {
//     return sequelizeConnection.sync();
// })

// =================================================================
//Establish page routing
//*****GET routes*****
router.get('/', function(req, res) {
  res.redirect('/index');
});

router.get('/index', function(req, res) {
    res.render('index');
});


router.get('/contact', function(req, res) {
  res.render('contact', { data: 'test' });
 });

router.get('/fight', function(req, res) {
  res.render('fight');
 });



//Add a goal per user
router.get('/add-user-goal/:userId/:goalId', function(req, res) {
  console.log('Goal being added');
  models.Users.findOne({ where: { id: parseInt(req.params.userId) } })
    // with .then, we can work with this instance and add a goal
    .then(function(user) {
        user.addGoals(parseInt(req.params.goalId), {goalstatus: false });
        var urlRedirect = '/browse/' + req.params.userId;
        res.redirect(urlRedirect);
    })
});

//*****POST routes*****
//Create a goal for the entire database & add to user
router.post('/create-goal', function(req, res) {

  var goal = req.body.addGoalName;
  var imageurl = req.body.addGoalURL;
  var userID = req.body.userID;

  //Create Goal and append to database
  models.Goals.create(
    {
      // the username
      goalname: goal, 
      imageURL: imageurl
    }
  )
  //add this goal to the user that created it
  .then(function(result){
    models.Users.findOne({ where: { id: req.body.userID } })
    .then(function(user) {
      user.addGoals(result.id);
      res.redirect('/browse/2');
    })
  })


});




module.exports = router;