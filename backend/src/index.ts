import express, { Request, Response } from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';


const port = 3000;
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));


// Http Logger
app.use(morgan('dev'));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());



// Template Engine
app.engine('hbs', engine({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

app.get('/', (req: Request, res: Response) => {
  res.render('home');
});

app.get('/news', (req: Request, res: Response) => {
  res.render('news');
});

app.get('/search', (req: Request, res: Response) => {
  res.render('search');
});

app.post('/search', (req: Request, res: Response) => {
  console.log(req.body);
  res.send('');
});

app.listen(port, () => {
  console.log('Server is running on port 3000');
});



