import express from 'express';
import booksRoutes from "./routes/books.routes";
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/books', booksRoutes)

export default app;