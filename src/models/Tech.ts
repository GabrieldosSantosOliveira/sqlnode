import Sequelize, {
  ForeignKey,
  Model,
  NonAttribute,
  Optional
} from 'sequelize';

import { IUserAtributes, User } from './User';
export type IModels = Pick<Sequelize.Sequelize, 'models'>;

export interface ITechAtributes {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}
export type ITechAtributesCreate = Optional<
  ITechAtributes,
  'id' | 'created_at' | 'updated_at'
>;
class Tech extends Model<
  ITechAtributes,
  ITechAtributesCreate
> {
  declare id: string;
  declare name: string;
  declare created_at: Date;
  declare updated_at: Date;
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
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      },
      { sequelize, timestamps: false, tableName: 'techs' }
    );
  }
  static associate({ models }: IModels) {
    this.belongsToMany(models.User, {
      foreignKey: 'tech_id',
      through: 'user_techs',
      as: 'users'
    });
  }
}
export { Tech };
