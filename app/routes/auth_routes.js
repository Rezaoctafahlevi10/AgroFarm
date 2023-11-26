// const express = require('express');
// const router = express.Router();
// const {signup,signup} = require('../controllers/user');

// // Rute untuk registrasi (signup)
// router.post('/daftar', signup);

// // Rute untuk login (signin)
// router.post('/login', signin);

// module.exports = router;
const login = require('../controllers').sigin
const daftar = require('../controllers').signup

module.exports = function(app){
    app.post('/api/auth/signup',
		[verifySignUpController.checkDuplicateUserNameOrEmail,
			verifySignUpController.checkRolesExisted
		],
		verifySignController.signup);

	app.post('/api/auth/signin', verifySignController.signin);

}

const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/auth.controller');

// Rute untuk registrasi (signup)
router.post('/daftar', signup);

// Rute untuk login (signin)
router.post('/login', signin);

module.exports = router;
