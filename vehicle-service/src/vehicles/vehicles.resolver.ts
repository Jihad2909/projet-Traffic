import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from './entity/vehicle.entity';
import { CreateVehicleInput } from './dto/create-vehicle.input';

@Resolver(() => Vehicle)
export class VehiclesResolver {
  constructor(private vehiclesService: VehiclesService) {}

  @Query(() => String)
  health() {
    return 'Vehicle service is running';
  }

  @Mutation(() => Vehicle)
  createVehicle(@Args('input') input: CreateVehicleInput) {
    return this.vehiclesService.create(input);
  }

  @Query(() => [Vehicle])
  getAllVehicles() {
    return this.vehiclesService.findAll();
  }

  @Query(() => Vehicle)
  getVehicleById(@Args('id') id: string) {
    return this.vehiclesService.findOne(id);
  }
}