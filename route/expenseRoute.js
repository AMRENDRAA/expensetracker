const express = require("express");
const router = express.Router();



const { createexpense, getallexpenses, deleteexpense, updateexpense } = require('../Controller/expenseController')

const validateToken = require("../Middleware/validatetoken")
router.post('/', validateToken, createexpense);
router.get('/', validateToken, getallexpenses);

router.delete('/:id', deleteexpense);
router.put('/:id', updateexpense);

// router.get('/'getallexpense);



module.exports = router;
