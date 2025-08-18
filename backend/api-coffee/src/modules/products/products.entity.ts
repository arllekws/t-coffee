import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Products extends Model<Products>{
    @Column
    name: string;

    @Column
    price: number;

    @Column
    description: string;
}