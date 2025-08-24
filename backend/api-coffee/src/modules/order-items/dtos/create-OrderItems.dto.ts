import { IsNotEmpty, IsUUID, IsNumber, Min, IsOptional } from "class-validator";

export class CreateOrderItemsDto {
  @IsNotEmpty()
  @IsUUID()
  productId!: string;

  @IsOptional()
  @IsUUID()
  orderId!: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  quantity!: number;

  @IsNotEmpty()
  @IsNumber()
  price!: number;
}
