import express from 'express';
import { Shop } from '../models/Shop';

const router = express.Router();

// Set booking button for a shop
router.post('/set', (req, res) => {
  // ...validate user/shop...
  // req.body: { shopId, facebookPageId, bookingButtonUrl }
  // ...update shop in DB...
  res.json({ success: true });
});

// Get booking button for a shop
router.get('/:shopId', (req, res) => {
  // ...fetch shop by req.params.shopId...
  // ...return bookingButtonUrl and facebookPageId...
  res.json({ /* ... */ });
});

export default router;
