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
  id: string;
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
  declare id: string;
  declare name: string;
  declare email: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare addresses?: NonAttribute<Address[]>;
  declare techs?: NonAttribute<Tech[]>;

  declare getTeches: HasManyGetAssociationsMixin<Tech>; // Note the null assertions!
  declare addTech: HasManyAddAssociationMixin<Tech, string>;
  declare addTeches: HasManyAddAssociationsMixin<
    Tech,
    string
  >;
  declare setTeches: HasManySetAssociationsMixin<
    Tech,
    string
  >;
  declare removeTech: HasManyRemoveAssociationMixin<
    Tech,
    string
  >;
  declare removeTeches: HasManyRemoveAssociationsMixin<
    Tech,
    string
  >;
  declare hasTech: HasManyHasAssociationMixin<Tech, string>;
  declare hasTeches: HasManyHasAssociationsMixin<
    Tech,
    string
  >;
  declare countTeches: HasManyCountAssociationsMixin;
  declare createTech: HasManyCreateAssociationMixin<
    Tech,
    'name'
  >;
  static initModel(sequelize: Sequelize.Sequelize) {
    this.init(
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4
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
