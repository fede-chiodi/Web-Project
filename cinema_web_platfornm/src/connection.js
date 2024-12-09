import { Sequelize } from "sequelize";

const sequelize = new Sequelize('cinema', 'your-db-username', 'your-db-psw', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
});

export default sequelize;
