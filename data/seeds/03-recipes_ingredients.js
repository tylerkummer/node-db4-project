exports.seed = function (knex) {
  return knex("recipes_ingredients")
    .del()
    .then(function () {
      return knex("recipes_ingredients").insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          ingredient_quantity: 5,
          ingredient_units: "tablespoons",
        },
        {
          recipe_id: 2,
          ingredient_id: 2,
          ingredient_quantity: 2,
          ingredient_units: "teaspoons",
        },
      ]);
    });
};
