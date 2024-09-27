import Recipe from '../models/RecipeModel.js ';

const RecipeController = {
  async getAllRecipes(req, res) {
    try {
      const recipes = await Recipe.getAll();
      res.json(recipes);
    } catch (error) {
      console.error('Erreur dans getAllRecipes:', error);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  },
  async getRecipeById(req, res) {
    const { id } = req.params;
    try {
      const recipe = await Recipe.getById(id);
      res.json(recipe);
    } catch (error) {
      console.error('Erreur dans getRecipeById:', error);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  },

  async addRecipe(req, res) {
    const { title, type, ingredient } = req.body;
    try {
      await Recipe.create(title, type, ingredient);
      res.status(200).json({ message: 'Recette créée avec succès' });
    } catch (error) {
      console.error('Erreur dans addRecipe:', error);
      res
        .status(500)
        .json({ message: 'Erreur lors de la création de la recette' });
    }
  },

  async updateRecipe(req, res) {
    const { id } = req.params;
    const updatedData = req.body;
    try {
      await Recipe.update(id, updatedData);
      res.status(200).json({ message: 'Recette mise à jour avec succès' });
    } catch (error) {
      console.error('Erreur dans updateRecipe:', error);
      res
        .status(500)
        .json({ message: 'Erreur lors de la mise à jour de la recette' });
    }
  },

  async deleteRecipe(req, res) {
    const { id } = req.params;
    try {
      await Recipe.delete(id);
      res.status(200).json({ message: 'Recette supprimée avec succès' });
    } catch (error) {
      console.error('Erreur dans deleteRecipe:', error);
      res
        .status(500)
        .json({ message: 'Erreur lors de la suppression de la recette' });
    }
  },
};
export default RecipeController;
