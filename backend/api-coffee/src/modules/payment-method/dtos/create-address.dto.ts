import { IsNotEmpty } from "class-validator";

export class CreatePaymentMethodDto {

    @IsNotEmpty()
    userId:string;

    @IsNotEmpty()
    methodName:string;
}