import { Model,PrimaryKey, Default, DataType, Column, Table } from "sequelize-typescript";

@Table({ tableName: "payment_methods", timestamps: true })
export class PaymentMethod extends Model<PaymentMethod> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    paymentMethodId: string;

    @Column({
    type: DataType.STRING,
    allowNull: false,
    })
    methodName!: string; // Ex: "Pix", "Cartão", "Dinheiro"
}