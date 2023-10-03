const express = require('express');

const userController = require('../controllers/adminUser');

const router = express.Router();

router.get('/get-users', userController.getUsers);

router.post('/add-user',userController.postAddUser);

router.delete('/delete-user/:id',userController.postDeleteUser);

module.exports = router;
