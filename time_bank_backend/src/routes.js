import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import Point_recordController from './app/controllers/Point_recordController';
import FileController from './app/controllers/FileController';
import CollaboratorController from './app/controllers/CollaboratorController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/collaborators', CollaboratorController.index);

routes.get('/pointrecords', Point_recordController.index);
routes.post('/pointrecords', Point_recordController.store);

routes.get('/user', UserController.index);



export default routes;
