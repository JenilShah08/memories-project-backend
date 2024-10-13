import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// Make sure this line stays below the app.use(cors());
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Hello to memories API');
});
// https://www.mongodb.com/cloud/atlas
// MongoDB connection
// const CONNECTION_URL = "mongodb+srv://kaleyashash02:kaleyashash02123@cluster0.bhqc9xh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = process.env.PORT || 5000;

// const PORT = 5000;

console.log(process.env.CONNECTION_URL);
console.log(PORT);

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

