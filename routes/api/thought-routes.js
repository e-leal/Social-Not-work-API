const router = require('express').Router();
const {addThought, removeThought, addReaction, removeReaction, getAllThoughts, getThoughtById, updateThought } = require('../../controllers/thought-controller');
const { route } = require('./user-routes');


// set up GET all and POST 
router
    .route('/')
    .get(getAllThoughts)
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought);

// /api/thoughts/<userId>
router.route('/:userId')
.post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId')
.delete(removeThought);

router.route('/:userId/:thoughtId/reactions')
.put(addReaction);

router.route('/:userId/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;