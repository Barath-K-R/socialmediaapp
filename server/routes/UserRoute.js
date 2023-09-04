import express from 'express'
import {  getUser,getAllUsers,updateUser,deleteUser,followUser,unfollowUser } from '../controllers/UserController.js'
import authMiddleWare from '../middleware/AuthMiddleware.js';

const router = express.Router()

router.get('/',getAllUsers)
router.get('/:id',getUser);
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)
router.put('/:id/follow',followUser)
router.put('/:id/unfollow',unfollowUser)

export default router