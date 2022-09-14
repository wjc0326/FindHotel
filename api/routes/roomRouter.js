import express from 'express';
import {
  getAllRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
  updateRoomAvailability,
} from '../controllers/roomController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// GET ALL
router.get('/', getAllRooms);
// GET
router.get('/:id', getRoom);
// CREATE
router.post('/:hotelid', verifyAdmin, createRoom);
// UPDATE
router.put('/:id', verifyAdmin, updateRoom);
router.put('/availability/:id', updateRoomAvailability);
// DELETE
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);

export default router;
