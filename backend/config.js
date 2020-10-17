import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL:
    'mongodb+srv://biso123:321321@amaxon.kyhir.mongodb.net/Amaxon?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'waladwalad',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey'
};