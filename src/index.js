import app from './app.js';
import cors from 'cors';
import './database.js';

app.use(cors());

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));