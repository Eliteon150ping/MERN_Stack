import express from 'express';
import cors from 'cors';
import movies from './api/movies.route.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/movies", movies);

// Handle 404
app.use('*', (req, res) => {
    res.status(404).json({ error: "not found" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

export default app;
