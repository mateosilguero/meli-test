import { Router } from 'express';

import MetaController from './controllers/meta.controller';
import ItemsController from './controllers/items.controller';

import errorHandler from './middleware/error-handler';

const routes = new Router();

routes.get('/', MetaController.index);

routes.get('/health', MetaController.healthCheck);

routes.get('/items', ItemsController.getAll);

routes.get('/items/:id', ItemsController.getItemByID);

routes.use(errorHandler);

export default routes;
