const router = require('express').Router();
const { UserMovies } = require('../../models');

// /api/movies/:id
router.post('/:id', async (req, res) => {
    try {
        // given a movie id, save this movie in the UserMovies through table for use in request
        const userMovie = await UserMovies.create({
            user_id: req.session.user_id,
            movie_id: req.params.id
        });

        res.status(200).json(userMovie);

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;