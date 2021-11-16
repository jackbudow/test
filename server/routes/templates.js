import express from 'express';

import { getTemplates } from '../controllers/templates.js'

const router = express.Router();

// Execute on visiting localhost:5000/templates
router.get('/', getTemplates);

export default router;