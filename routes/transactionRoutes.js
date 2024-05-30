const express = require('express')
const { addTransaction, getAllTransaction,editTransaction,deleteTransaction} = require('../controllers/transactionController')


//router object
//user routes
const router = express.Router()
//transaction routes
//routes
//add Transaction
router.post('/add-transaction',addTransaction);
//edit transaction
router.post('/edit-transaction',editTransaction);
//delete transaction
router.post('/delete-transaction',deleteTransaction);

//getTransaction
router.post('/get-transaction',getAllTransaction);


module.exports = router