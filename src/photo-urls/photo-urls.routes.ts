import { Router } from 'express';
import { getPhotos } from './photo-urls.controller';
import {validateNumberInput} from "./photo-urls.validation.middleware";

const router = Router();

router.get('/:number', validateNumberInput, getPhotos);

export default router;
