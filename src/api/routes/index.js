const router = require('express-promise-router')();
const config = require('../../config');
const jwt = require('express-jwt');

//////////////////////API USER/////////////

const auth = jwt({
  secret: config.secret,
  userProperty: 'payload'
});

const ctrlProfile = require('../controllers/profile');
const ctrlMining= require('../controllers/mining');
const ctrlAuth = require('../controllers/authentication');
const ctrlTask = require('../controllers/task');
const ctrlMqtt = require('../controllers/mqtt');

// API USUARIOS
// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
/////////////////////////////////////////
//
// // pruebas//////////////////////////////////////////
// router.get('/hola/:name', (req, res, next) =>{
//   res.send({message: `hola ${req.params.name}!`})
//
// })
//
router.get('/mining', ctrlMining.getMinings);
//
router.get('/mining/:miningId', ctrlMining.getMining);
//
router.post('/mining', ctrlMining.postMining);
//
router.put('/mining/:miningId', ctrlMining.updateMining);
//
router.delete('/mining/:miningId', ctrlMining.deleteMining);




////////////////////Task/////////////////////////////


router.get('/tasks', ctrlTask.getTasks);

router.get('/task/:taskId', ctrlTask.getTask);

router.post('/task', ctrlTask.postTask);

router.delete('/task/:taskId', ctrlTask.deleteTask);

router.put('/task/:taskId', ctrlTask.updateTask);


// MQTT //
router.get('/mqtt', ctrlMqtt.getMqtt);

//
module.exports = router;
