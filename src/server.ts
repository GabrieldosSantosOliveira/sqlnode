import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import SwaggerUi from 'swagger-ui-express';

import { routes } from './routes';
import SwaggerSettings from './swagger.json';

import 'dotenv/config';
import './database';
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(
  '/api-docs',
  SwaggerUi.serve,
  SwaggerUi.setup(SwaggerSettings)
);

app.use(routes);
app.use((req, res) => {
  return res.status(404).json({ error: 'Page not Found' });
});
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
