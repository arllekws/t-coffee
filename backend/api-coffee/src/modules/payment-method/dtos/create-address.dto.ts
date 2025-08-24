import { IsNotEmpty } from "class-validator";

export class CreatePaymentMethodDto {

    @IsNotEmpty()
    methodName:string;
}