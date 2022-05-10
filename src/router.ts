import { Router } from 'express';
import createNoteController from './Components/Note/Controller';

const router = Router();

const noteController = createNoteController();

router.use('/api/note', noteController);

export default router;
