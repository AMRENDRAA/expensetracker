const express = require("express");
const router = express.Router();

const { createexpense } = require('../Controller/expenseController')
router.post('/', createexpense);
// router.get('/'getallexpense);



module.exports = router;
