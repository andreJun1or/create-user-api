import { FastifyInstance } from 'fastify';
import { registerController } from '../../controller';

export const registerRoute = async (app:FastifyInstance) => {
  app.post('/register', registerController);
};