import Sequelize from 'sequelize';

import { Address } from '../models/Address';
import { Tech } from '../models/Tech';
import { User } from '../models/User';
import * as dbConfig from './../config/database';
const connection = new Sequelize.Sequelize(dbConfig as any);
Tech.initModel(connection);
User.initModel(connection);
Address.initModel(connection);
Tech.associate({ models: connection.models });
Address.associate({ models: connection.models });
User.associate({ models: connection.models });
export { connection };
