import { NextFunction, Request, Response } from 'express';
import Course from '../../model/Course';
import { multipleMongooseToObject } from '../../utils/mongoose';


class MeController {

    // [GET] /me/stored/courses
    storedCourses(req: Request, res: Response, next: NextFunction) {

        Promise.all([Course.find({}), Course.countDocumentsWithDeleted({deleted: true})])
            .then(([courses, deletedCount]) =>
                res.render('me/storedCourses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses)
                })
                
            )
            .catch(next)

        // Course.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount);
        //     })
        //     .catch(() => { })

        // Course.find({})
        //     .then(courses => res.render('me/storedCourses', { courses: multipleMongooseToObject(courses) }))
        //     .catch(next)
    }

    // [GET] /me/trash/courses
    trashCourses(req: Request, res: Response, next: NextFunction) {
        Course.findWithDeleted({})
            .then(courses => res.render('me/trashCourses', { courses: multipleMongooseToObject(courses) }))
            .catch(next)
    }

}

export default MeController;
