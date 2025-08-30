import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateAddressDto {

    @IsNotEmpty()
    street!: string;
    
    @IsNotEmpty()
    city!: string;
    
    @IsNotEmpty()
    state!: string;
    
    @IsNotEmpty()
    zipCode!: string;
    
    @IsOptional()
    userId!: string;


}