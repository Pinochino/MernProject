import express from 'express';
import CourseController from '../app/controllers/CourseController';

const route = express.Router();
const courseController = new CourseController();

route.get('/create', courseController.create);
route.post('/store', courseController.store);
route.get('/:id/edit', courseController.edit);
route.get('/:slug', courseController.show);
route.post('/hanlde-form-action', courseController.handleFormAction)
route.put('/:id', courseController.update);
route.delete('/:id', courseController.delete);
route.delete('/:id/force', courseController.forceDelete);
route.patch('/:id/restore', courseController.restore);

export default route;
