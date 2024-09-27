import express from 'express';
import dotenv from 'dotenv';
import RecipeRoutes from './src/routes/RecipeRoutes.js ';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api', RecipeRoutes);

const port = process.env.PORT || 3090; 


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
