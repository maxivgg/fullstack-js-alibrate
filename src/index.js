import app from './app';
import cors from 'cors';
import './database';

app.use(cors());
//app.use(express.static('public/build'));

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));