const router = require('express').Router();
const {
    getUser,
    // getOneUser,
    createNewUser
    
}= require('../../controllers/userController.js')
// /api/users

// GET all users
router.route('/')
    .get(getUser)
    .post(createNewUser);
// GET a single user by its _id and populated thought and friend data
// router.route('/:studentId')
//     .get(getOneUser)
    // .delete(deleteStudent);
// POST a new user:

// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// PUT to update a user by its _id

// DELETE to remove user by its _id

// BONUS: Remove a user's associated thoughts when deleted.

// /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list

module.exports = router;