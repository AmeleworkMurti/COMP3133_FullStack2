var express = require('express');
var router = express.Router();

/* GET users listing */
router.get('/', function(req, res, next) {
  res.send('GET request received');
});

/* POST users */
router.post('/', function(req, res, next) {
  const userData = req.body;
  res.send('POST request received: ' + JSON.stringify(userData));
});


/* GET user with query params */
router.get('/search', function(req, res, next) {
  const name = req.query.name;
  const age = req.query.age;

  res.send(`Search User - Name: ${name}, Age: ${age}`);
});



/* GET user by ID */
router.get('/:id', function(req, res, next) {
  const userId = req.params.id;
  res.send('User ID is: ' + userId);
});

module.exports = router;