const db = require('../db.json');

function getMovies(req, res) {
    const {sort, page} = req.query;

    if(sort === 'desc') {
        const movies = [...db.movies].sort((a, b) => b.id - a.id);
        res.json(movies);
    } else {
        setTimeout(function() { 
            res.json(db.movies.slice(25 * (page -1 ), 25 * page)); 
        }, 1500);
    }
}

function deleteMovieById(req, res) {
    const { id } = req.params;
    db.movies = db.movies.filter(movie => movie.id !== +id);
    res.json(id);
};

function createMovie(_, res) {
    const movie = {
        id: Date.now(),
    };
    db.movies.push(movie);
    res.status(201).json(movie);
};

function updateMovie(req, res) {
    const {id: unsafeId, ...changes} = req.body;
    const {id} = req.params;
    const targetMovieIndex = db.movies.findIndex(movie => movie.id === +id);
    

    db.movies[targetMovieIndex] = {...db.movies[targetMovieIndex], ...changes};

    res.status(200).json(db.movies[targetMovieIndex]);
}

module.exports = {
    getMovies,
    deleteMovieById,
    createMovie,
    updateMovie
};