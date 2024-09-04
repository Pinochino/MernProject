import { Application, Request, Response } from 'express';
import newsRouter from './news';
import siteRouter from './site';

function route(app: Application): void {
    app.use('/', siteRouter);

    app.use('/news', newsRouter);

    app.use('/search', siteRouter);

    // app.post('/search', (req: Request, res: Response) => {
    //   console.log(req.body);
    //   res.send('');
    // });
}
export default route;
