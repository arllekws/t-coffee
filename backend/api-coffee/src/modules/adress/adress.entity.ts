import { Column, Model, Table, DataType, PrimaryKey, Default } from 'sequelize-typescript';

@Table({ tableName: 'addresses' })
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

  @Column(DataType.STRING)
  userId!: string;
}
