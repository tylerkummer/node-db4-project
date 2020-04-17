const db = require("./db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("ingredients").select("name").where({ recipe_id });
}

function getInstructions(recipe_id) {
  return db("instructions")
    .select("name", "step_number", "step_description")
    .where({ recipe_id });
}
