import express from 'express';
import SiteController from '../app/controllers/SiteController';

const router = express.Router();
const siteController = new SiteController();

router.get('/search', siteController.search);
router.get('/', siteController.home);

export default router;
