const express = require('express');
const router = express.Router();
const {updateUser,getUsers,createUser,deleteUser,getUserWithRoles,getdeletedUser,getUserWithProjects}=require('./users')
// const getUsers=require('./users')
// const createUser=require('./users')
// const deleteUser=require('./users')

router.put('/user/:userId',updateUser)
 router.get('/user/',getUsers)
router.post('/user',createUser)
router.delete('/user/:userId',deleteUser)
router.get('/roles/:userId',getUserWithRoles)
router.get('/projects/:userId',getUserWithProjects)
router.get('/userDeleted',getdeletedUser)

module.exports = router;