import Sequelize, {
  Association,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyGetAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManySetAssociationsMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  Model,
  NonAttribute,
  Optional
} from 'sequelize';

import { Address, IModels } from './Address';
import { Tech } from './Tech';
export interface IUserAtributes {
  id: number;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}
export type IUserAtributesCreate = Optional<
  IUserAtributes,
  'id' | 'created_at' | 'updated_at'
>;
class User extends Model<
  IUserAtributes,
  IUserAtributesCreate
> {
  declare id: number;
  declare name: string;
  declare email: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare addresses?: NonAttribute<Address[]>;
  declare techs?: NonAttribute<Tech[]>;
  declare addTech: HasManyAddAssociationMixin<Tech, number>;

  declare getTechs: HasManyGetAssociationsMixin<Tech>; // Note the null assertions!
  declare addTechs: HasManyAddAssociationsMixin<
    Tech,
    number
  >;
  declare setTechs: HasManySetAssociationsMixin<
    Tech,
    number
  >;
  declare removeTech: HasManyRemoveAssociationMixin<
    Tech,
    number
  >;
  declare removeTechs: HasManyRemoveAssociationsMixin<
    Tech,
    number
  >;
  declare hasTech: HasManyHasAssociationMixin<Tech, number>;
  declare hasTechs: HasManyHasAssociationsMixin<
    Tech,
    number
  >;
  declare countTechs: HasManyCountAssociationsMixin;
  declare createTech: HasManyCreateAssociationMixin<
    Tech,
    'name'
  >;
  static initModel(sequelize: Sequelize.Sequelize) {
    this.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      },
      { sequelize, timestamps: false }
    );
  }
  static associate({ models }: IModels) {
    this.hasMany(models.Address, {
      foreignKey: 'user_id',
      as: 'addresses'
    });
    this.belongsToMany(models.Tech, {
      foreignKey: 'user_id',
      through: 'user_techs',
      as: 'techs'
    });
  }
  declare static associations: {
    addresses: Association<User, Address>;
  };
}
export { User };
