// import express from 'express';
// import mongoose from 'mongoose';
// import bookRoutes from './routes/bookRoutes';
// import { config } from 'dotenv';

// config();

// const app = express();

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api/books', bookRoutes);

// // MongoDB connection
// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI || '', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.error('MongoDB connection error:', error);
//         process.exit(1);
//     }
// };

// connectDB();

// export default app;
import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes'; // path doğru olmalı

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Book routes mount
app.use('/api/books', bookRoutes);

export default app;
