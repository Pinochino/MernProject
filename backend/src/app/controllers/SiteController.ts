import { Request, Response } from 'express';
import Course from '../../model/Course';
const {multipleMongooseToObject} = require('../../utils/mongoose')

class SiteController {
    // [GET] /
    async home(req: Request, res: Response, next: any) {
        // res.render('home');
        // try {
        //     const courses = await getCourses();
        //     res.json(courses);
        // } catch (error) {
        //     res.status(400).json({error: 'Failed to fetch courses'});
        // }

        Course.find({})
            .then(courses => {
                res.render('home', { courses: multipleMongooseToObject(courses) })
            })
            .catch(next);
    }

    // [GET] / search
    search(req: Request, res: Response) {
        res.render('search');
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



export default SiteController;
