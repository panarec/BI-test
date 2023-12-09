import { Router } from 'express';
import { singleFileUploadHandler } from '../handlers/singleFileUploadHandler.js';
const router = Router();

router.post('/', singleFileUploadHandler);

export default router;
