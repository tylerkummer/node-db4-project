exports.seed = function (knex) {
  return knex("instructions")
    .del()
    .then(function () {
      return knex("instructions").insert([
        {
          name: "Instruction1",
          step_number: 1,
          step_description: "Description1",
          recipe_id: 1,
        },
        {
          name: "Instruction2",
          step_number: 2,
          step_description: "Description2",
          recipe_id: 1,
        },
        {
          name: "Instruction3",
          step_number: 3,
          step_description: "Description3",
          recipe_id: 1,
        },
      ]);
    });
};
