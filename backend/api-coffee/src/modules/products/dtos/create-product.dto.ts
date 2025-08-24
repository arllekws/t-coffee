import { IsNotEmpty } from "class-validator";

export class CreateProductDto {

     @IsNotEmpty()
     street!: string;
   
     @IsNotEmpty()
     city!: string;
   
     @IsNotEmpty()
     state!: string;
   
     @IsNotEmpty()
     zipCode!: string;

     @IsNotEmpty()
     userId: string;
}