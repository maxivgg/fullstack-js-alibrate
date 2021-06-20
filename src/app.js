import express from 'express';
import booksRoutes from "./routes/books.routes";
import authRoutes from "./routes/auth.routes";
import usersRoutes from './routes/users.routes';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/books', booksRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', usersRoutes);

export default app;