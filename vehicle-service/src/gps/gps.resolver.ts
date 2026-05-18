import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { GpsService } from './gps.service';
import { GpsPosition } from './entity/gps-position.entity';
import { RecordGpsInput } from './dto/record-gps.input';

@Resolver(() => GpsPosition)
export class GpsResolver {
  constructor(private gpsService: GpsService) {}

  @Mutation(() => GpsPosition)
  recordGps(@Args('input') input: RecordGpsInput) {
    return this.gpsService.record(input);
  }

  @Query(() => [GpsPosition])
  getVehicleHistory(@Args('vehicleId') vehicleId: string) {
    return this.gpsService.getHistory(vehicleId);
  }
}