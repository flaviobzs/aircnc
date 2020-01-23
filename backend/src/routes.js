import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './controllers/SessionController';
import SpotController from './controllers/SpotController';
import DashboardController from './controllers/DashboardController';
import BookingController from './controllers/BookingController';

const routes = Router();

// const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post(
  '/spots',
  multer(multerConfig).single('thumbnail'),
  SpotController.store
);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

export default routes;
