import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import connectDb from './config/dbConfig.js';
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import adminRoutes from './routes/admin/index.js'
import { adminProtect } from './middleware/authMiddleware.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

const app = express();
dotenv.config();
connectDb();

app.use(cors({
  credentials: true,
}));

//Need to know the reason why we are using this 
//app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/admin/', adminProtect, adminRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, ()=>console.log(`running at port: ${process.env.PORT}`))