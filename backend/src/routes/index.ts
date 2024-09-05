import { Application, Request, Response } from 'express';
import newsRouter from './news';
import siteRouter from './site';
import profileRouter from './profile';

function route(app: Application): void {
    app.use('/', siteRouter);

    app.use('/news', newsRouter);

    app.use('/search', siteRouter);

    app.use('/profile', profileRouter )

    // app.post('/search', (req: Request, res: Response) => {
    //   console.log(req.body);
    //   res.send('');
    // });
}
export default route;
