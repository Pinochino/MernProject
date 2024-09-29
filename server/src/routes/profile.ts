import express from "express";
import ProfileController from "../app/controllers/ProfileController";


const router = express.Router();
const profileController = new ProfileController();

router.get('/:slug', profileController.show);
router.get('/', profileController.index);

export default router;