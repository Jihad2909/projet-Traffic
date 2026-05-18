import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GpsService } from './gps.service';
import { GpsResolver } from './gps.resolver';
import { GpsPosition } from './entity/gps-position.entity';
import { Vehicle } from '../vehicles/entity/vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GpsPosition, Vehicle])],
  providers: [GpsService, GpsResolver],
})
export class GpsModule {}