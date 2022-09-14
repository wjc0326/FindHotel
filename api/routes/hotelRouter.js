import express from 'express';
import {
  getAllHotels,
  countByCity,
  countByType,
  getHotel,
  createHotel,
  updateHotel,
  deleteHotel,
  getHotelRooms,
} from '../controllers/hotelController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// GET ALL
router.get('/', getAllHotels);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);
router.get('/room/:id', getHotelRooms);

// GET
router.get('/:id', getHotel);
// CREATE
router.post('/', verifyAdmin, createHotel);
// UPDATE
router.put('/:id', verifyAdmin, updateHotel);
// DELETE
router.delete('/:id', verifyAdmin, deleteHotel);

export default router;
