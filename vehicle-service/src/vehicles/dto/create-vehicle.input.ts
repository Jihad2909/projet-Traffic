import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsEnum } from 'class-validator';
import { VehicleStatus } from '../../common/enums/vehicle-status.enum';

@InputType()
export class CreateVehicleInput {
  @Field()
  @IsString()
  immatriculation: string;

  @Field()
  @IsString()
  model: string;

  @Field(() => VehicleStatus, { nullable: true })
  @IsEnum(VehicleStatus)
  @IsOptional()
  status?: VehicleStatus;
}