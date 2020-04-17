exports.up = function (knex) {
  return (
    knex.schema
      // recipes table
      .createTable("recipes", (tbl) => {
        tbl.increments();
        tbl.string("name", 255).notNullable();
      })
      // ingredients table
      .createTable("ingredients", (tbl) => {
        tbl.increments();
        tbl.string("name", 255).notNullable();
      })
      // recipes and ingredients table
      .createTable("recipes_ingredients", (tbl) => {
        tbl.increments();
        tbl.float("ingredient_quantity", 255).notNullable();
        tbl.string("ingredient_units", 255).notNullable();
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes")
          .onUpdate("CASCADE")
          .onDelete("RESTRICT");
        tbl
          .integer("ingredient_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("ingredients")
          .onUpdate("CASCADE")
          .onDelete("RESTRICT");
      })
      // instructions table
      .createTable("instructions", (tbl) => {
        tbl.increments();
        tbl.string("name", 255).notNullable();
        tbl.integer("step_number");
        tbl.text("step_description");
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes")
          .onUpdate("CASCADE")
          .onDelete("RESTRICT");
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};

// npm i -g knex
// knex migrate:latest
// npx knex
// npx knex seed:run

// git init
// npm init -y
// npx gitignore node
// npm i express cors knex sqlite3 helmet knex-cleaner
// npm i --save-dev nodemon
// touch index.js
// touch server.js
// npx knex init
// mkdir data
// mkdir models
// mkdir routers
// Update knex filename
// useNullAsDefault: true
// migrations and seeds
// cd data touch dbConfig.js
