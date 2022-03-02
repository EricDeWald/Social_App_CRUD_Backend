const { User, Thought } = require('../models');

// Get all users
async function getAllUsers(req, res) {
    const userdata = await User.find()
    .select('-__v');
    res.json(userdata);
}
// GET a single user by its _id and populated thought and friend data
async function getOneUser(req, res){
        const userdata = await User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate("thoughts")
        .populate("friends");
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
    const updateUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {$set:req.body},
        {runValidators: true, new: true}
        )
    res.json(updateUser);
}
// example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// // DELETE to remove user by its _id
async function deleteUserData(req,res){
    const deleteUser = await User.findOneAndDelete({ _id: req.params.userId });
    // Remove a user's associated thoughts when deleted.
    // delete many find user id to delete the thoughts with that user id
    const deleteThought = await Thought.deleteMany(
        { _id: { $in: user.thoughts }}
        );
    res.json(deleteUser);
}
///api/users/:userId/friends/:friendId
async function getFriendData(req,res){
    const friendData = await User.findById(
        {friends: req.params.friendId}
        )
    res.json(friendData)
}

// POST to add a new friend to a user's friend list
async function addFriendData(req,res){
    const updateUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {$addToSet: { friends: req.params.friendId}},
        { runValidators: true, new: true }
    )

    res.json(updateUser);
}
    // example data
// {
//   "username": "lernantino",
//   "friend": "lernantino@gmail.com"
// }


// DELETE to remove a friend from a user's friend list
async function removeFriendData(req,res){
    const updateUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {$pull: { friends: req.params.friendId}},
        { runValidators: true, new: true }
    )

    res.json(updateUser);
    }

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUserData,
    deleteUserData,
    removeFriendData,
    addFriendData,
    getFriendData
    }