import { Router } from 'express';
import createNoteService from './Service';

function createNoteController() {
  const router = Router();
  const service = createNoteService();

  router.get('/', async (req, res) => {
    try {
      const notes = await service.show(req.body);
      res.json(notes);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

  router.post('/', async (req, res) => {
    try {
      const notes = await service.create(req.body);
      res.json(notes);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

  router.patch('/', async (req, res) => {
    try {
      const notes = await service.update(req.body);
      res.json(notes);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      if (id) {
        const notes = await service.remove(parseInt(id, 10));
        res.json(notes);
      } else {
        res.status(400).json({ error: '/:id is required' });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

  router.post('/approve', async (req, res) => {
    try {
      const { id } = req.body;
      if (id) {
        const note = await service.approve(parseInt(id, 10));
        res.json(note);
      } else {
        res.status(400).json({ error: 'id is required' });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

  router.post('/disapprove', async (req, res) => {
    try {
      const { id } = req.body;
      if (id) {
        const note = await service.disapprove(parseInt(id, 10));
        res.json(note);
      } else {
        res.status(400).json({ error: 'id is required' });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

  return router;
}

export default createNoteController;
