import { FastifyRequest, FastifyReply } from 'fastify';
import { StatusCodes } from 'http-status-codes';
import RegisterModel from '../models/RegisterModel';

async function registerController(request:FastifyRequest, reply:FastifyReply) {
  const loginModel = new RegisterModel(request.body);
  const result = await loginModel.createUserInDatabase();
  if('statusCode' in result) {
    const statusCode = result.statusCode;
    if('error' in result) {
      const error = result.error;
      return reply.status(statusCode).send(error);
    }
    if('user' in result) {
      const user = result.user;
      for(const key of user.keys()) {
        return reply.status(statusCode).send({ id: key });
      }
    }
  }
  return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: 'Internal server error'});
}

export { registerController };