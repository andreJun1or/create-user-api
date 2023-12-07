import fastify from 'fastify';
import 'dotenv/config';
import { registerRoute } from './routes';

const app = fastify();

const PORT = Number(process.env.PORT);
const HOST = process.env.HOST;

app.register(registerRoute, { prefix: '/auth' });

app.listen({ port: PORT, host: HOST }, (err, address) => {
  if(err) throw err;
  console.log(`Server running on ${address}`);
});