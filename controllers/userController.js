const { User, Thought } = require('../models');

// Get all users

async function getAllUsers(req, res) {
    const userdata = await User.find();
    res.json(userdata);
}
// GET a single user by its _id and populated thought and friend data
async function getOneUser(req, res){
    const userdata = await User.findOne({ _id: req.params.userId });
    res.json(userdata);
}

// POST a new user:
async function createNewUser(req,res){
    const createdUser = await User.create(req.body);
    res.json(createdUser);
}
// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }

// PUT to update a user by its _id
async function updateUserData(req,res){
    const updateUser = await User.findOneAndUpdate({ _id: req.params.userId })
    res.json(updateUser);
}
// // DELETE to remove user by its _id
async function deleteUserData(req,res){
    const deleteUser = await User.findOneAndDelete({ _id: req.params.userId });
    res.json(deleteUser);
}
// BONUS: Remove a user's associated thoughts when deleted.

// delete many find user id to delete the thoughts with that user id

// /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list


module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUserData,
    deleteUserData
    }