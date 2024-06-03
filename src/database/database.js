import mongoose from 'mongoose';
import 'dotenv/config';

const url = process.env.MONGODB_URI;

try {
    // Connect to the MongoDB cluster
     mongoose.connect(url);

  } catch (e) {
    console.log("No se ha podido conectar: ", e);
  }

export default mongoose;