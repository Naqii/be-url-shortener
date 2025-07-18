import express from 'express';
import router from './routes/api';
import mongoose from 'mongoose';
import cors from 'cors';
import { errorHandler } from './middlewares/error.middlewares';
import db from "./utils/database";

async function init() {
  try {
    const result = await db();
    console.log("database status: ", result);
    console.log('Connected to:', mongoose.connection.name);
    
    const app = express();

    const PORT = 4000;

    app.use(cors());

    app.use(express.json());

    app.use(errorHandler);

    app.use('/api', router);

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

init();
  
