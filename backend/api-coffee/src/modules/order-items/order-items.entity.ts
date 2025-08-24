import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
  Default,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Products } from "../products/products.entity";
import { Orders } from "../order/order.entity";

@Table({ tableName: "order_items", timestamps: true })
export class OrderItem extends Model<OrderItem> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare orderItemId: string;

  // FK para Products
  @ForeignKey(() => Products)
  @Column(DataType.UUID)
  declare productId: string;

  @BelongsTo(() => Products, {
    foreignKey: "productId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  declare product: Products;

  // FK para Orders
  @ForeignKey(() => Orders)
  @Column(DataType.UUID)
  declare orderId: string | null;

  @BelongsTo(() => Orders, {
    foreignKey: "orderId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  declare order: Orders;

  @Column(DataType.INTEGER)
  declare quantity: number;

  @Column(DataType.DECIMAL(10, 2))
  declare price: number;
}
