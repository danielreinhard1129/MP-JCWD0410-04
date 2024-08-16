import { EventCardController } from '@/controllers/eventCard.controller';
import { Router } from 'express';

const router = Router();
const eventCardController = new EventCardController();

router.get('/blogs', async (req, res) => {
  try {
    const events = await eventCardController.getEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching blogs' });
  }
});

export default router;