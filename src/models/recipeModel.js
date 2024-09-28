import db from '../config/db.js';

const Recipe = {
  create: async (title, type, description, ingredient) => {
    if (!title) {
      throw new Error('Title cannot be null');
    }
    const query =
      'INSERT INTO recipes (title, type, description, ingredient) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(query, [
      title,
      type,
      description,
      ingredient,
    ]);
    return result;
  },

  checkRecipe: async (title) => {
    const [rows] = await db.query(
      'SELECT COUNT(*) as count FROM recipes WHERE title = ?',
      [title]
    );
    return rows[0].count > 0;
  },

  getById: async (id) => {
    const query = 'SELECT * FROM recipes WHERE id = ?';
    const [rows] = await db.query(query, [id]);
    return rows.length > 0 ? rows[0] : null;
  },

  update: async (id, updatedData) => {
    const query =
      'UPDATE recipes SET title = ?, type = ?, description = ?, ingredient = ? WHERE id = ?';
    const [result] = await db.query(query, [
      updatedData.title,
      updatedData.type,
      updatedData.description,
      updatedData.ingredient,
      id,
    ]);
    return result;
  },

  delete: async (id) => {
    const query = 'DELETE FROM recipes WHERE id = ?';
    const [result] = await db.query(query, [id]);
    return result; 
  },

  getAll: async () => {
    const query = 'SELECT * FROM recipes';
    const [rows] = await db.query(query);
    return rows;
  },
};

export default Recipe;
