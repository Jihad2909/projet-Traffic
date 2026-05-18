import { InputType, Field } from '@nestjs/graphql';
import { IsUUID, IsNumber, Min, Max } from 'class-validator';

@InputType()
export class RecordGpsInput {
  @Field()
  @IsUUID()
  vehicleId: string;

  @Field()
  @IsNumber()
  @Min(-90)
  @Max(90)
  latitude: number;

  @Field()
  @IsNumber()
  @Min(-180)
  @Max(180)
  longitude: number;
}