import Sequelize from 'sequelize';

import * as dbConfig from './../config/database';
const connection = new Sequelize.Sequelize(dbConfig as any);
export { connection };
