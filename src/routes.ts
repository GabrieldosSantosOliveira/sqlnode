import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ hello: 'Hello World' });
});
export { routes };
