const { User, Thought } = require('../models');

// sort on the get all thoughts

// create a thought then update it on a user under one route

// if i can figure out delete thought you can figure out the pull off the user you can do the same with the user delete thoughts

// reactions controllers are like the friend updates



// * `GET` to get all thoughts
async function getAllthoughts(req, res) {
    const thoughtdata = await Thought.find()
    .select('-__v');
    res.json(thoughtdata);
}
// * `GET` to get a single thought by its `_id`
async function getOneThought(req, res){
    try {
        const thoughtdata = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        res.json(thoughtdata);
    } catch (error) {
        res.status(500).json(err)
    }
}

// * `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)
async function createthought(req,res){
    const createdthought = await Thought.create(req.body);
    const updateUser = await User.findOneAndUpdate({ _id: req.params.userId },{$set:createdthought},{runValidators: true, new: true})
    res.json(updateUser);
}
// ```json
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// ```

// * `PUT` to update a thought by its `_id`
async function updateThoughtData(req,res){
    const updateThought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId },{$set:req.body},{runValidators: true, new: true})
    res.json(updateThought);
}
// * `DELETE` to remove a thought by its `_id`
async function deleteThoughtData(req,res){
    const deleteThought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
    res.json(deleteThought);
}
// ---

// **`/api/thoughts/:thoughtId/reactions`**

// * `POST` to create a reaction stored in a single thought's `reactions` array field

// * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

module.exports = {
    getAllthoughts,
    getOneThought,
    createthought,
    updateThoughtData,
    deleteThoughtData
}