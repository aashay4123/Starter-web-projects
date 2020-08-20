const express = require('express');
const router = express.Router();
const morgan = require('morgan');

const checkAuth = require('../middleware/check-auth');
const UsersController = require('../controller/users');

router.post("/signup",UsersController.user_signup);

router.post("/login", UsersController.user_login);

router.delete("/:userId",checkAuth, UsersController.user_delete);

module.exports = router;