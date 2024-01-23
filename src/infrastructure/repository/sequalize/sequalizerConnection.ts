import { Sequelize } from "sequelize";

const sequelize = new Sequelize("training", "admin", "admin", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

export { sequelize };
