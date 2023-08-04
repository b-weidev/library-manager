const express = require('express')
const bookController = require('../controller/book')

const router = express.Router()

router.get('/library', bookController.getBookList)
router.post('/createBook', bookController.createBook)
router.put('/updateBook/:updateIndex', bookController.updateBook)
router.put('/updateAvailability/:updateIndex', bookController.updateAvailability)
router.delete('/deleteBook/:deleteIndex', bookController.deleteBook)
router.get('/getAvailable', bookController.getAvailable)
router.get('/search/:searchField/:searchValue', bookController.searchBook)

module.exports = router