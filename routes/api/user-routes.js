const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');
// const { updateUser } = require('../../controllers/user-controller');

// set up GET all and POST 
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// set up GET one, PUT, and DELETE 
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router  
    .route('/:id/friends/:friendId')
    .put(addFriend)
    .delete(removeFriend);

module.exports = router;