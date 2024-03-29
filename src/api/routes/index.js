const router = require('express-promise-router')();
const config = require('../../config');
const jwt = require('express-jwt');

//////////////////////API USER/////////////

const auth = jwt({
    secret: config.secret,
    userProperty: 'payload'
});

const ctrlProfile = require('../controllers/profile');
const ctrlMining = require('../controllers/mining');
const ctrlAuth = require('../controllers/authentication');
const ctrlTask = require('../controllers/task');
const ctrlFirebase = require('../controllers/firebase');

// API USUARIOS
// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
/////////////////////////////////////////


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

/////////////////firebase///////////////////////////

router.post('/firebase', ctrlFirebase.postElement); //cambiar a post

module.exports = router;