import {
  Model,
  Table,
  Column,
  DataType,
  Scopes,
} from "sequelize-typescript";

interface UserCreationAttributes {
  name: string;
  email: string;
  password: string;
}

@Scopes(() => ({
  public: {
    attributes: ['id', 'name', 'email', 'chatterbox', 'createdAt', 'updatedAt'],
  },
}))
@Table({
  tableName: 'users',
})
export class User extends Model<User, UserCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  chatterbox: boolean;

}