import { NextFunction, Request, Response } from 'express';
import Course from '../../model/Course';
import { multipleMongooseToObject } from '../../utils/mongoose';

class MeController {

    // [GET] /me/stored/courses

    storedCourses(req: Request, res: Response, next: NextFunction) {
        Course.find({ })
        .then(courses =>  res.render('me/storedCourses', {courses: multipleMongooseToObject(courses)}))
        .catch(next)
    } 

    trashCourses(req: Request, res: Response, next: NextFunction){
        Course.findDeleted({ })
        .then(courses =>  res.render('me/trashCourses', {courses: multipleMongooseToObject(courses)}))
        .catch(next)
    }

}

export default MeController;
