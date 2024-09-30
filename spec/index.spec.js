import Recipe from '../src/models/RecipeModel.js';

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
    expect(updatedRecipe.ingredient).toBe(updatedData.ingredient);
  });

  it('cannot create recipe with invalid data', async () => {
    const recipe = {
      titre: null,  
      ingredients: 'Lait, Chocolat, sucre',
      description: 'updated description',
      type: 'Dessert',
    };
  
    try {
      await Recipe.createRecipe(
        recipe.titre,
        recipe.ingredients,
        recipe.description,
        recipe.type
      );
      fail('Expected an error to be thrown'); 
    } catch (error) {
      console.log('Erreur  :', error.message);
    }
    
  });
  
  it('can delete a recipe', async () => {

    const result = await Recipe.delete(recipeId);
    expect(result.affectedRows).toBe(1);
    const deletedRecipe = await Recipe.getById(recipeId);
    expect(deletedRecipe).toBeNull();

  });

  it('Cannot get recipe by invalid ID', async () =>{
    const invalidId = 9999; 
    const recipe = await Recipe.getById(invalidId);
    expect(recipe).toBeNull(); 

  });

});
