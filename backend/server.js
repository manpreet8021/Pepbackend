import express from 'express';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary';
import cors from 'cors';
import connectDb from './config/dbConfig.js';
import dotenv from 'dotenv'
import apiRoutes from './routes/index.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import next from 'next'
import fs from 'fs'

const app = express();
dotenv.config();
connectDb();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDNAIRY_NAME,
  api_key: process.env.CLOUDNAIRY_API_KEY,
  api_secret: process.env.CLOUDNAIRY_SECRET_KEY,
  secure: true
})

fs.access('./temp', fs.constants.F_OK, (err) => {
  if (err) {
    fs.mkdir('./temp', { recursive: true }, (err) => {
      if (err) {
        console.error('Error creating directory:', err);
      }
    });
  }
})

app.use(cors({
  origin: process.env.CORS,
  credentials: true,
}));

app.use(express.json())
app.use(cookieParser());

if(process.env.ENVIRONMENT === 'production') {
  const nextConfig = { dev: process.env.ENVIRONMENT !== 'production', dir: 'frontend' };
  const server = next(nextConfig);
  const handle = server.getRequestHandler();

  server.prepare().then(() => {
    app.use('/api/', apiRoutes);

    app.all('*', (req, res) => {
      return handle(req, res)
    })

    app.use(notFound);
    app.use(errorHandler);
  })
} else {
  app.use('/api/', apiRoutes);
  app.get('/', (req, res) => res.json("Api runing"))
  app.use(notFound);
  app.use(errorHandler);
}

app.listen(process.env.PORT, ()=>console.log(`running at port: ${process.env.PORT}`))