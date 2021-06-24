import express from 'express';
import cors from 'cors';
import path from 'path';
import booksRoutes from './routes/books.routes.js';
import authRoutes from './routes/auth.routes.js';
import usersRoutes from './routes/users.routes.js';
import myLibraryRoutes from './routes/myLibrary.routes.js';

const app = express();

app.use(express.json());
app.use(cors({origin: '*'}));
app.use(express.static(path.join("./public/build")))

app.use('/api/books', booksRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', usersRoutes);
app.use('/api/my-library', myLibraryRoutes);

export default app;