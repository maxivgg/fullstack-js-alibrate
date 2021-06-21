import express from 'express';
import booksRoutes from "./routes/books.routes.js";
import authRoutes from "./routes/auth.routes.js";
import usersRoutes from './routes/users.routes.js';
import morgan from 'morgan';
var app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/books', booksRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', usersRoutes);
export default app;