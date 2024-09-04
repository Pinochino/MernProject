import express from 'express';
import NewsController from '../app/controllers/NewsController';

const router = express.Router();
const newsController = new NewsController();

// mewsController.index;

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

export default router;
