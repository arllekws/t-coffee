import { Column, DataType, Default,   Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: "products",
    timestamps: true
})
export class Products extends Model<Products>{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    productId: string;

    @Column
    name: string;

    @Column
    price: string;

    @Column
    description: string;

    
   
}