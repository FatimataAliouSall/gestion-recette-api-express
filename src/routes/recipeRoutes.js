import express from 'express';
import RecipeController from '../controllers/RecipeController.js ';

import {
  addRequestValidator,
  deleteRequestValidator,
  getByIdRequestValidator,
  updateRequestValidator,
} from '../validators/RecipeValidat.js';

const router = express.Router();

router.get('/recipes', RecipeController.getAllRecipes);
router.get(
  '/recipes/:id',
  getByIdRequestValidator,
  RecipeController.getRecipeById
);
router.post('/recipes/add', addRequestValidator, RecipeController.addRecipe);
router.put(
  '/recipes/edit/:id',
  updateRequestValidator,
  RecipeController.updateRecipe
);
router.delete(
  '/recipes/delete/:id',
  deleteRequestValidator,
  RecipeController.deleteRecipe
);

export default router;
