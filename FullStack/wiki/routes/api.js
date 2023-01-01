import express from 'express';
import { createApi, deleteApi, findSpecific, getApi, updateApi } from '../controller/api.js';
const router = express.Router();

router.get('/api', getApi).post('/api', createApi).get('/api/:title',findSpecific)
router.patch('/:id', updateApi).post('/', updateApi)
router.delete('/api', deleteApi)


export default router;