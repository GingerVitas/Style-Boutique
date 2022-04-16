const Sequelize = require("sequelize");
const db = require("../db");

const tags = ["tags"];

const Tag = db.define("tag", {
  name: {
    type: Sequelize.ENUM(tags),
    unique: true,
  },
});

module.exports = Tag;
