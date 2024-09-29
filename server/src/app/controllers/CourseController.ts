import { NextFunction, Request, Response } from 'express';
import Course from '../../model/Course';
import { mongooseToObject } from '../../utils/mongoose';


class CourseController {

      // [DELETE] /courses/:id/force
      forceDelete(req: Request, res: Response, next: NextFunction){
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }


     // [PATCH] /courses/:id/restore
     restore(req: Request, res: Response, next: NextFunction){
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }


    // [DELETE] 
    delete(req: Request, res: Response, next: NextFunction) {
        Course.delete({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }

    // [PUT] /courses/:id
    update(req: Request, res: Response, next: NextFunction){
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }


    // [GET] /courses/:slug
    show(req: Request, res: Response, next: NextFunction) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                if (course) {
                    res.render('courses/show', { course: mongooseToObject(course) })
                } else {
                    res.status(404).send('Course not found');
                }
            })
            .catch(next)
    }
    // [GET] /courses/create
    create(req: Request, res: Response, next: NextFunction) {
        res.render("courses/create")
    }

    // /courses/:id/edit
    edit(req: Request, res: Response, next: NextFunction) {
        Course.findById(req.params.id)
            .then(course => {
                if (course) {
                    res.render('courses/edit', {
                        course: mongooseToObject(course)
                    })
                } else { 
                    return res.status(400).send('Course not found');
                }
            })
            .catch(next);
    }


    // [POST] /courses/store
    store(req: Request, res: Response, next: NextFunction) {
        // res.json(req.body)
        req.body.image = `https://www.youtube.com/vi/${req.body.videoId}`
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch((error) => { });
    }

    // [POST] /courses/hanlde-form-action
    handleFormAction(req: Request, res: Response, next: NextFunction){
        switch (req.body.action) {
            case 'delete':
                Course.delete({_id: { $in: req.body.courseIds}})
                .then(() => res.redirect('back'))
                .catch(next)
                break;
            default:
                res.json({message: 'Action is invalid'});
        }
    }

}




export default CourseController;
