import express from 'express';
import MeController from '../app/controllers/MeController';

const route = express.Router();
const meController = new MeController();

route.get('/stored/courses', meController.storedCourses)
route.get('/trash/courses', meController.trashCourses)

export default route;
