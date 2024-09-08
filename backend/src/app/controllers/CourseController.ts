import { Request, Response } from 'express';
import Course from '../../model/Course';
import { mongooseToObject } from '../../utils/mongoose';

class CourseController {
    // [DELETE] 
    delete(req: Request, res: Response, next: any) {
        Course.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }

    // [PUT] /courses/:id
    update(req: Request, res: Response, next: any){
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => console.log(error));
    }


    // [GET] /courses/:slug
    show(req: Request, res: Response, next: any) {
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
    create(req: Request, res: Response, next: any) {
        res.render("courses/create")
    }

    // /courses/:id/edit
    edit(req: Request, res: Response, next: any) {
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
    store(req: Request, res: Response, next: any) {
        // res.json(req.body)
        req.body.image = `https://www.youtube.com/vi/${req.body.videoId}`
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => { });
    }
}



// async function getCourses() {
//     try {
//         const courses = await Course.find();
//         return courses;
//     } catch (error) {
//          throw new Error(`Error: ${error}`)
//     }
// }



export default CourseController;
