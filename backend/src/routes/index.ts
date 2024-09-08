import { Application, Request, Response } from 'express';
import newsRouter from './news';
import siteRouter from './site';
import profileRouter from './profile';
import courseRouter from './course';
import meRouter from './me';

function route(app: Application): void {
    app.use('/', siteRouter);

    app.use('/me', meRouter );

    app.use('/news', newsRouter);

    app.use('/search', siteRouter);

    app.use('/profile', profileRouter )

    app.use('/courses', courseRouter);

    // app.post('/search', (req: Request, res: Response) => {
    //   console.log(req.body);
    //   res.send('');
    // });
}
export default route;
