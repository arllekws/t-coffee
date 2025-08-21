import { Model, Table, Column, DataType, PrimaryKey, Default, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Products } from "../products/products.entity";
import { Orders } from "../order/order.entity";

@Table({ tableName: "order_items", timestamps: true })
export class OrderItem extends Model<OrderItem> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  orderItemId!: string;

  // FK para Products
  @ForeignKey(() => Products)
  @Column(DataType.UUID)
  productId!: string;

  @BelongsTo(() => Products)
  product!: Products;

  // FK para Orders
  @ForeignKey(() => Orders)
  @Column(DataType.UUID)
  orderId!: string;

  @BelongsTo(() => Orders)
  order!: Orders;

  @Column
  quantity!: number;

  @Column
  price!: number;

  
}
