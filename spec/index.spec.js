import Recipe from '../src/models/RecipeModel.js ';

describe('Recipe tests', () => {
  let recipeId = null;
  it('can be created', async () => {
    const recipe = {
      title: 'crepe',
      type: 'dessert',
      description: 'pâte à base de farine',
      ingredient: 'farine',
    };
    const result = await Recipe.create(
      recipe.title,
      recipe.type,
      recipe.description,
      recipe.ingredient
    );
    recipeId = result.insertId;
    const recipeCreated = await Recipe.getById(recipeId);
    expect(recipeId).not.toBeNull();
    expect(recipeCreated).not.toBeNull();
    expect(recipeCreated.title).toBe(recipe.title);
  });

  it('cannot be created with invalid data', async () => {
    const recipe = {
      title: null,
      type: 'dessert',
      description: 'pâte à base de farine',
      ingredient: 'farine',
    };
    try {
      await Recipe.create(
        recipe.title,
        recipe.type,
        recipe.description,
        recipe.ingredient
      );
      fail('Expected an error to be thrown');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('can get all recipes', async () => {
    const getAll = await Recipe.getAll();
    expect(getAll).not.toBeNull();
    expect(Array.isArray(getAll)).toBe(true);
  });

  it('can update a recipe', async () => {
    const updatedData = {
      title: 'updated crepe',
      type: 'dessert',
      description: 'updated description',
      ingredient: 'updated ingredient',
    };

    const result = await Recipe.update(recipeId, updatedData);
    expect(result.affectedRows).toBe(1);

    const updatedRecipe = await Recipe.getById(recipeId);
    expect(updatedRecipe.title).toBe(updatedData.title);
    expect(updatedRecipe.description).toBe(updatedData.description);
  });

  it('can delete a recipe', async () => {
    const result = await Recipe.delete(recipeId);
    expect(result.affectedRows).toBe(1);

    const deletedRecipe = await Recipe.getById(recipeId);
    expect(deletedRecipe).toBeNull();
  });
});
