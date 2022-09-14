import express from 'express';
import {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauth', verifyToken, (req, res, next) => {
//   res.send('hello user, you are logged in');
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('hello user, you are logged in and you can manage your account');
// });

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('hello admin, you are logged in and you can manage all accounts');
// });

// GET ALL
router.get('/', verifyAdmin, getAllUsers);
// GET
router.get('/:id', verifyUser, getUser);
// UPDATE
router.put('/:id', verifyUser, updateUser);
// DELETE
router.delete('/:id', verifyUser, deleteUser);

export default router;
