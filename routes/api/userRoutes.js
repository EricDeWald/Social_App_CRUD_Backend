const router = require('express').Router();
const {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUserData,
    deleteUserData,
    removeFriendData,
    addFriendData,
    
}= require('../../controllers/userController.js')
// /api/users

router.route('/api/users')
// GET all users
    .get(getAllUsers)
    // POST a new user:
    .post(createNewUser);
    // // example data
    // {
    //   "username": "lernantino",
    //   "email": "lernantino@gmail.com"
    // }

router.route('/:userId')
    // GET a single user by its _id and populated thought and friend data
    .get(getOneUser)
    // PUT to update a user by its _id
    .put(updateUserData)
    // DELETE to remove user by its _id
    .delete(deleteUserData);
// BONUS: Remove a user's associated thoughts when deleted.

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')

// POST to add a new friend to a user's friend list
    .post(addFriendData)
    // example: pass valid user id and friend id in the url

// DELETE to remove a friend from a user's friend list
    .delete(removeFriendData)
    // example: pass valid user id and friend id in the url
module.exports = router;