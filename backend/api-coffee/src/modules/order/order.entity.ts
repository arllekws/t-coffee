import { Model, Table, Column, DataType, PrimaryKey, Default, ForeignKey, BelongsTo } from "sequelize-typescript";
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

  @ForeignKey(()=> OrderItem)
  orderItemId!: string;

  @BelongsTo(()=> OrderItem)
  orderItem:OrderItem;

  @ForeignKey(() => PaymentMethod)
  @Column(DataType.UUID)
  paymentId!: string;

  @BelongsTo(() => PaymentMethod)
  paymentMethod!: PaymentMethod;

  @Column(DataType.DATE)
  order_date!: Date | null;
}
