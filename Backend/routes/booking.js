import express from 'express'
import {createBooking} from '../controller/bookingController.js'

const router = express.Router();
router.post("/:tourId",createBooking);







export default router;