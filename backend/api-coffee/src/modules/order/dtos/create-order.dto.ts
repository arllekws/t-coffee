import { IsNotEmpty, IsOptional } from "class-validator";

export class createOrderDto{
    
    @IsNotEmpty()
    userId:string;

    @IsNotEmpty()
    addressId: string;

    @IsNotEmpty()
    orderItemId!: string;

    @IsNotEmpty()
    paymentId!: string;

    @IsOptional()
    order_date!: Date;
}