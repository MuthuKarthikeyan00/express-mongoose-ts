import { Router } from 'express';
import { createRole, getRoles, getRole, updateRole, deleteRole } from '../controllers/roleController';

const router = Router();

router.post('/roles', createRole);
router.get('/roles', getRoles);
// router.get('/roles/:id', getRole);
// router.put('/roles/:id', updateRole);
// router.delete('/roles/:id', deleteRole);

export default router;
