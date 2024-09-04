import { Request, Response } from 'express';

class SiteController {
    // [GET] /
    home(req: Request, res: Response) {
        res.render('home');
    }

    // [GET] / search
    search(req: Request, res: Response) {
        res.render('search');
    }
}

export default SiteController;
