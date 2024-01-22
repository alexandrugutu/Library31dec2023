const {Router} = require('express');
const router = Router();
const {
    getBooks, 
    deleteBookById,
    createBook,
    updateBook
} = require('./helpers');

router.get('/books', getBooks);
router.delete('/books/:id', deleteBookById);
router.post('/books', createBook);
router.put("/books/:id", updateBook);

module.exports = router;