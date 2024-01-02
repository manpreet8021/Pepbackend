import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import router from './routes/index.js';
import mongoose from 'mongoose';

const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080/');
});


mongoose.Promise = Promise;
mongoose.connect('mongodb+srv://admin:Passw0rd@peprelier.7mpcnrw.mongodb.net/');
mongoose.connection.on('error', (error) => console.log(error));

app.use('/', router());