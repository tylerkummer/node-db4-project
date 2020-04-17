exports.seed = function (knex) {
  return knex("recipes")
    .del()
    .then(function () {
      return knex("recipes").insert([
        {
          name: "Recipe1",
        },
        {
          name: "Recipe2",
        },
      ]);
    });
};
