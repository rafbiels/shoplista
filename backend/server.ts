import express, {Express} from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT_BACKEND: number;
      ATLAS_PROTOCOL: string;
      ATLAS_USER: string;
      ATLAS_PW: string;
      ATLAS_URI: string;
    }
  }
}

const app : Express = express();
const port : number = process.env.PORT_BACKEND || 5000;
const dbURL : string = process.env.ATLAS_PROTOCOL +
                       process.env.ATLAS_USER + ":" +
                       process.env.ATLAS_PW + "@" +
                       process.env.ATLAS_URI;

mongoose.connect(dbURL, {useUnifiedTopology: true,  useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.use(cors());
app.use(express.json());

import usersRouter from './routes/users';
import recipesRouter from './routes/recipes';
import itemsRouter from './routes/items';

app.use('/users/', usersRouter);
app.use('/recipes/', recipesRouter);
app.use('/items/', itemsRouter);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port: ${port}`);
  console.log(`Connection string: ${dbURL}`);
});
