const db = require("../db.json");

function getBooks(req, res) {
    const {sort} = req.query;

    if(sort === 'desc') {
        const books = [...db.books].sort((a, b) => b.id - a.id);
        res.json(books);
    } else {
        res.json(db.books);
    }
}

function deleteBookById(req, res) {
    const { id } = req.params; // {id: 1, page: 3, scrollPosition: 350 }
    db.books = db.books.filter(book => book.id !== +id);
    res.json(id);
};

function createBook(req, res) {
    const book = {
        id: Date.now(),
    };
    db.books.push(book);
    res.status(201).json(book);
};

function updateBook(req, res) {
    const {id: unimportantId, ...changes} = req.body;
    const {id} = req.params;
    const targetBookIndex = db.books.findIndex(book => book.id === +id);
    

    db.books[targetBookIndex] = {...db.books[targetBookIndex], ...changes};

    res.status(200).json(db.books[targetBookIndex]);
}

module.exports = {
    getBooks,
    deleteBookById,
    createBook,
    updateBook
};