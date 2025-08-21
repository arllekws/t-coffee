import { Model, Table, Column, DataType, PrimaryKey, Default, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "../user/user.entity";

@Table({ tableName: "addresses" })
export class Address extends Model<Address> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  addressId!: string;

  @Column
  street!: string;

  @Column
  city!: string;

  @Column
  state!: string;

  @Column
  zipCode!: string;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  userId!: string;

  @BelongsTo(() => User)
  user!: User;
}
