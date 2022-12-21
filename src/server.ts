import * as dotenv from 'dotenv';
import createApp from './app';

dotenv.config();

const app = createApp();
const { PORT } = process.env;

app.init().listen(parseInt(PORT, 10), () => console.log(`listen on PORT: `, PORT));
