import express from 'express';
import morgan from 'morgan';
import authRoutes from './rotes/auth.routes.js';
import cookieParser from 'cookie-parser';

const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser()); //para manejar y acceder de forma mas sencilla a las cookies
app.use("/api",authRoutes);

export default app;