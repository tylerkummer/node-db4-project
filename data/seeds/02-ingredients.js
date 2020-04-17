exports.seed = function (knex) {
  return knex("ingredients")
    .del()
    .then(function () {
      return knex("ingredients").insert([
        {
          name: "Ingredient1",
        },
        {
          name: "Ingredient2",
        },
        {
          name: "Ingredient3",
        },
      ]);
    });
};
