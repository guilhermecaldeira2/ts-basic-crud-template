import createApp from './app';

const app = createApp();
const { PORT } = process.env;

app.init().listen(parseInt(PORT, 10), () => console.log(`listen on PORT: `, PORT));
