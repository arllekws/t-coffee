import { 
  Model, Table, Column, DataType, PrimaryKey, Default, 
  ForeignKey, BelongsTo, HasMany 
} from "sequelize-typescript";
import { User } from "../user/user.entity";
import { Address } from "../adress/adress.entity";
import { PaymentMethod } from "../payment-method/payment-method.entity";
import { OrderItem } from "../order-items/order-items.entity";

@Table({ tableName: "orders", timestamps: true })
export class Orders extends Model<Orders> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  orderId!: string;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  userId!: string;

  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => Address)
  @Column(DataType.UUID)
  addressId!: string;

  @BelongsTo(() => Address)
  address!: Address;

  @ForeignKey(() => PaymentMethod)
  @Column(DataType.UUID)
  paymentId!: string;

  @BelongsTo(() => PaymentMethod)
  paymentMethod!: PaymentMethod;

  @Default(DataType.NOW)
  @Column(DataType.DATE)
  order_date!: Date;

  @HasMany(() => OrderItem)
  items!: OrderItem[];
}
