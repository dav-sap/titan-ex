import { Router } from 'express';
import {addOrder, getOrdersByUser} from './orders.controller';
import {validateOrderGet, validateOrderInput} from './orders.validation.middleware';

const router = Router();

router.post('/', validateOrderInput, addOrder);
router.get('/:user', validateOrderGet, getOrdersByUser);

export default router;
