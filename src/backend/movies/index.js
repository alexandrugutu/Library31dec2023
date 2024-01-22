const {Router} = require('express');
const router = Router();
const {
    getMovies, 
    deleteMovieById,
    createMovie,
    updateMovie
} = require('./helpers');

router.get('/movies', getMovies);
router.delete('/movies/:id', deleteMovieById);
router.post('/movies', createMovie);
router.put("/movies/:id", updateMovie);

module.exports = router;