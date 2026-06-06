const express = require("express");
const router = express.Router();


const { registerUser, loginuser } = require('../Controller/expenseUserController');

router.post('/register', registerUser);
router.post('/login', loginuser)

module.exports = router;
