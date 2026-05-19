import { InputType, Field, Int } from '@nestjs/graphql';
import { TrafficStatus } from '../entities/zone.entity';

@InputType()
export class CreateZoneInput {
  @Field()
  name!: string;

  @Field()
  location!: string;

  @Field(() => Int)
  trafficDensity!: number;

}
//données envoyées par le client