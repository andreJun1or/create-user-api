import fastify from 'fastify';
import 'dotenv/config';

const app = fastify();

const PORT = Number(process.env.PORT);
const HOST = process.env.HOST;

app.listen({ port: PORT, host: HOST }, (err, address) => {
  if(err) throw err;
  console.log(`Server running on ${address}`);
});