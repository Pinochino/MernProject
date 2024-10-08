import express, { Request, Response } from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';
import route from './routes/index';
import connectDb from './config/db';

const port = 3000;
const app = express();

// Method-override
var methodOverride = require('method-override');
app.use(methodOverride('_method'))


// Connect to database
connectDb();


// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Http Logger
app.use(morgan('dev'));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// Template Engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a: number, b: number) =>  a + b,
      comparison: (value: number, options: Handlebars.HelperOptions) =>{
        if (value  > 0) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      } 
  }
  }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Routes init
route(app);

app.listen(port, () => {
  console.log('Server is running on port 3000');
});
