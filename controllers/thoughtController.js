const { User, Thought } = require('../models');

// sort on the get all thoughts

// reactions controllers are like the friend updates

// * `GET` to get all thoughts
async function getAllthoughts(req, res) {
    const thoughtdata = await Thought.find()
    .select('-__v');
    res.json(thoughtdata);
}
// * `GET` to get a single thought by its `_id`
async function getOneThought(req, res) {
    // console.log(req.params)
    const thoughtdata = await Thought.findOne({_id: req.params.thoughtId})
    .select('-__v');
    res.json(thoughtdata);
}
// * `POST` to create a new thought 
async function createthought(req,res){
    const createdThoughtData = await Thought.create(req.body);
    const updateUser = await User.findOneAndUpdate(
        { _id: req.body.userId },
        {$push:{ thoughts: createdThoughtData._id}},
        {runValidators: true, new: true}
        )
    res.json('Thought created.');
}
// ```json
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "userName": "lernantino",
//   "userId": "620dbf9dc5705429eddb8a3d"
// }
// ```

// * `PUT` to update a thought by its `_id`
async function updateThoughtData(req,res){
    const updateThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        {$set:req.body},
        {runValidators: true, new: true})
    res.json(updateThought);
}
// in the route pass valid thought id in url
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
// }
// ```

// * `DELETE` to remove a thought by its `_id`

async function deleteThoughtData(req,res){
    const deleteThought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
    const removeThought = await User.findOneAndUpdate({ thoughts: req.params.thoughtId})
    res.json('Thought is gone.');
}
// ---

// **`/api/thoughts/:thoughtId/reactions`**
async function getReactions(req,res){
    const reactionData = await Thought.findById(
        {_id: req.params.reactionId},
        { $in: thought.reactions}
        )
    res.json(reactionData);
}
// * `POST` to create a reaction stored in a single thought's `reactions` array field
async function createReaction(req,res){
    console.log(req.body);
    const createdReaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: {reactions: req.body} },
        {runValidators: true, new: true}
        );
    
    res.json("created Reaction")
}

    //    "reactionBody": "some text"
    //    "userName": "some string"
    //
// * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
async function deleteReactionData(req,res){
    const deleteReaction = await Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$pull: {reactionId: req.params.reactionId}}
        );

    res.json(deleteReaction);
}
module.exports = {
    getAllthoughts,
    getOneThought,
    createthought,
    updateThoughtData,
    deleteThoughtData,
    getReactions,
    createReaction,
    deleteReactionData
}