import 'dotenv/config';
import express from 'express';
import mountRoutes from './routes/index.js';

const APP_PORT = process.env.APP_PORT;

const app = express();
mountRoutes(app);

app.listen(APP_PORT, () => {
  console.log(`Server running on port ${APP_PORT}`);
});
