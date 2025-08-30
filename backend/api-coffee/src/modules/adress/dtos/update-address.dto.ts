import { PartialType } from "@nestjs/mapped-types";
import { CreateAddressDto } from "src/modules/adress/dtos/create-address.dto";

export class UpdateAddressDto extends PartialType(CreateAddressDto) {}