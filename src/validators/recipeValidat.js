import { check, param, validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';
import Recipe from '../models/RecipeModel.js ';

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ errors: errors.array() });
  }
  next();
};

const addRequestValidator = [
  check('title')
    .not()
    .isEmpty()
    .withMessage('Le titre ne peut pas être vide.')
    .bail()
    .isLength({ min: 6 })
    .withMessage('Le titre doit comporter au moins 6 caractères.')
    .bail()
    .custom(async (value) => {
      const existingRecipe = await Recipe.checkRecipe(value);
      if (existingRecipe) {
        throw new Error('Cette recette existe déjà.');
      }
      return true;
    }),
  handleValidationErrors,
];

const deleteRequestValidator = [
  param('id')
    .not()
    .isEmpty()
    .withMessage("L'ID est obligatoire.")
    .bail()
    .custom(async (value) => {
      const recipe = await Recipe.getById(value);
      if (!recipe) {
        throw new Error("Cette recette n'existe pas.");
      }
      return true;
    }),
  handleValidationErrors,
];

const updateRequestValidator = [
  param('id')
    .not()
    .isEmpty()
    .withMessage("L'ID de la recette est requis.")
    .bail()
    .custom(async (value) => {
      const recipe = await Recipe.getById(value);
      if (!recipe) {
        throw new Error("Cette recette n'existe pas.");
      }
      return true;
    }),
  check('title')
    .optional()
    .isLength({ min: 6 })
    .withMessage('Le titre doit contenir au moins 6 caractères.'),
  check('type')
    .optional()
    .not()
    .isEmpty()
    .withMessage('Le type de recette est requis.'),
  check('ingredient')
    .optional()
    .not()
    .isEmpty()
    .withMessage('Les ingrédients sont requis.'),
  check('description')
    .optional()
    .not()
    .isEmpty()
    .withMessage('La description est requise.'),
  handleValidationErrors,
];

const getByIdRequestValidator = [
  param('id')
    .not()
    .isEmpty()
    .withMessage("L'ID de la recette est requis.")
    .bail()
    .custom(async (value) => {
      const recipe = await Recipe.getById(value);
      if (!recipe) {
        throw new Error("Cette recette n'existe pas.");
      }
      return true;
    }),
  handleValidationErrors,
];

export {
  addRequestValidator,
  deleteRequestValidator,
  updateRequestValidator,
  getByIdRequestValidator,
};
