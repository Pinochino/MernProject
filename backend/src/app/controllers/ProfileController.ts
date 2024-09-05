import { Request, Response } from "express";

class ProfileController {

    index(req: Request, res: Response){
        res.render('profile');
    }

    show(req: Request, res: Response){
        res.send('Profile Detail!!!')
    }
}
export default ProfileController;