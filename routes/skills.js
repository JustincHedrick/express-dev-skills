var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

// All routes will start with '/skills'
// because this router is mounted in 
// server.js with a starts with path of
// /skills 


/* GET /skills index functionality */
router.get('/', skillsCtrl.index);
//get /skills/new new functionality
router.get('/new', skillsCtrl.new);
// get /skills show functionality
router.get('/:id', skillsCtrl.show);
// PUT /skills/:id create functionality
router.post('/' , skillsCtrl.create);

module.exports = router;
