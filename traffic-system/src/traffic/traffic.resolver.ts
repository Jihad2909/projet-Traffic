import {
  Resolver,
  Query,
  Mutation,
  Args,Int
} from '@nestjs/graphql';

import { TrafficService } from './traffic.service';

import { Zone } from './entities/zone.entity';

import { CreateZoneInput } from './dto/create-zone.input';

import { UpdateZoneInput } from './dto/update-zone.input';
@Resolver(() => Zone)
export class TrafficResolver {

  constructor(
    private readonly trafficService:
    TrafficService,
  ) {}


  // ➕ mutation création
  @Mutation(() => Zone)
  createZone(

    @Args('input')
    input: CreateZoneInput,

  ) {

    return this.trafficService.create(
      input,
    );
  }


  // 📋 afficher zones
  @Query(() => [Zone], {
    name: 'allZones',
  })
  getZones() {

    return this.trafficService.findAll();
  }
   // 📋 afficher zones par id 
  @Query(() => Zone, { name: 'zone' })
  getZoneById(
  @Args('id', { type: () => Number }) id: number,
  ) {
  return this.trafficService.findOne(id);
}
  
    // ✏️ UPDATE
  @Mutation(() => Zone)
  updateZone(
    @Args('id', { type: () => Int }) id: number,

    @Args('input')
    input: UpdateZoneInput,
  ) {
    return this.trafficService.update(
      id,
      input,
    );
  }
  // 🚨 zones congestionnées
  @Query(() => [Zone], {
    name: 'congestedZones',
  })
  getCongested() {

    return this.trafficService
      .findCongested();
  }
}