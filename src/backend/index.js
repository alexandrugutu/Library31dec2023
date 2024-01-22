const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./books');
const PORT = 3000;
const server = express();

server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());
server.use("/", booksRouter);

// server.use((req, res, next) => {
//     console.log(req.body); //Object.create(null) 
//     next();
// });

// server.get('/', (req, res) => {
//     res.send('it works!');
// });


server.listen (PORT, () => {
    console.log(`Server started!! App listening at http://localhost:${PORT}/`)
});