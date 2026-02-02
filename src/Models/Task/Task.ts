import Sequelize from "sequelize";
import sequelize from "../../config/index.js";

const Task = sequelize.define("tasks", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  created_by: {
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: "People",
        schema: "public",
      },
      key: "id",
    },
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn("NOW"),
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn("NOW"),
  },
});

export default Task;
