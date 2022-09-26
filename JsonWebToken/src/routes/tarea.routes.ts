import { Router } from 'express';
import { getTareas } from '../controllers/tarea.controller';
import validateToken from './validate-token';

const router = Router();

router.get('/', validateToken ,getTareas);

export default router;