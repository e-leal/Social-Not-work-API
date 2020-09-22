const {User} = require('../models');

const userController ={
    // user functions

    //get all users
    getAllUser(req, res){
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .sort({_id: -1})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            req.status(500).json(err);
        });
    },

    //get one user by id
    getUserById({params}, res){
        User.findOne({_id: params.id})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            //if no user is found, send 404
            if(!dbUserData){
                res.status(404).json({message: 'No user found with this id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    //create a user
    createUser({body}, res){
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },

    // update a user
    updateUser({params, body}, res){
        User.findOneAndUpdate({_id: params.id}, body, {new: true})
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({message: 'No User found with that id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // delete a user
    deleteUser({params}, res){
        User.findOneAndDelete({_id: params.id})
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({message: 'No user found with that id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // Add a friend
    addFriend({params, body}, res){
        User.findOneAndUpdate(
            {_id: params.id},
            { $push: { friends: body } },
            { new: true }
        )
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({message: 'No user found with that id'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    // remove Friend
    removeFriend({ params }, res){
        User.findOneAndUpdate(
            { _id: params.id },
            { $pull: { friends: { _id: params.friendId } } },
            { new: true }
        )
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },
};

module.exports = userController;