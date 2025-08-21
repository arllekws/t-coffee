import { Model, PrimaryKey, Default, DataType, Column,  Table } from "sequelize-typescript";

@Table({ tableName: "users", timestamps: true })
export class User extends Model<User> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  userId!: string;

  @Column
  name!: string;

  @Column
  email!: string;
}
