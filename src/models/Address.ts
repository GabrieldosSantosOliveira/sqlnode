import Sequelize, {
  ForeignKey,
  Model,
  NonAttribute,
  Optional
} from 'sequelize';

import { User } from './User';
export type IModels = Pick<Sequelize.Sequelize, 'models'>;

export interface IAddressAtributes {
  id: number;
  user_id: ForeignKey<number>;
  zipcode: string;
  street: string;
  number: number;
  created_at: Date;
  updated_at: Date;
}
export type IAddressAtributesCreate = Optional<
  IAddressAtributes,
  'id' | 'created_at' | 'updated_at'
>;
class Address extends Model<
  IAddressAtributes,
  IAddressAtributesCreate
> {
  declare id: number;
  declare user_id: ForeignKey<User['id']>;
  declare zipcode: string;
  declare street: string;
  declare number: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare user: NonAttribute<User[]>;
  static initModel(sequelize: Sequelize.Sequelize) {
    this.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        zipcode: {
          type: Sequelize.STRING,
          allowNull: false
        },
        street: {
          type: Sequelize.STRING,
          allowNull: false
        },
        number: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      },
      { sequelize, timestamps: false }
    );
  }
  static associate({ models }: IModels) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
  }
}
export { Address };
