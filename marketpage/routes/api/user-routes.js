const router = require('express').Router();
const userController = require('../../controllers/userController');

//add new user to database
router.route('/login').post(
    userController.create
)

module.exports = router;