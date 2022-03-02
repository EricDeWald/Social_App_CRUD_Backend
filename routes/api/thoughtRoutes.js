const router = require('express').Router();
const {
    getAllthoughts,
    getOneThought,
    createthought,
    updateThoughtData,
    deleteThoughtData,
    createReaction,
    deleteReactionData

}= require('../../controllers/thoughtController.js')

// /api/thoughts

router.route('/')
// GET to get all thoughts
    .get(getAllthoughts)
// GET to get a single thought by its _id
    .get(getOneThought)
// POST to create a new thought
    .post(createthought)
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }

router.route('/:thoughtId')
// PUT to update a thought by its _id
    .put(updateThoughtData)
// DELETE to remove a thought by its _id
    .delete(deleteThoughtData)

// /api/thoughts/:thoughtId/reactions

router.route('/:thougthId/reactions')
// POST to create a reaction stored in a single thought's reactions array field
    .post(createReaction)
// DELETE to pull and remove a reaction by the reaction's reactionId value
    .delete(deleteReactionData)

module.exports = router;