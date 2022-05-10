import { Sequelize } from 'sequelize';

class Connection {
  public connection: Sequelize;

  constructor() {
    const { POSTGRES_HOST, POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_PORT } =
      process.env;

    const config = {
      DATABASE: POSTGRES_DATABASE,
      USER: POSTGRES_USER,
      PASSWORD: POSTGRES_PASSWORD,
      HOST: POSTGRES_HOST,
      PORT: POSTGRES_PORT,
    };

    this.connection = new Sequelize(config.DATABASE, config.USER, config.PASSWORD, {
      host: config.HOST,
      port: parseInt(config.PORT, 10),
      dialect: 'postgres',
      logging: false,
      pool: {
        max: 50,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    });

    return this;
  }

  getConnection() {
    return this.connection;
  }
}

export default new Connection();
