import express from 'express';
import task from './routes/tasks';
import user_authentication from './routes/authentication';
import cors from 'cors';

import { port, allowedOrigins, allowedHeaders, allowedMethods } from './serverConfig';
import { checkAuthorization } from './middlewares/authentication/checkAuthorization';

const app = express();
const options: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: allowedMethods,
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 200,
  allowedHeaders: allowedHeaders 
};

app.use(cors(options));
app.use(checkAuthorization)
app.use(express.json());
app.use(task, user_authentication);

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
})