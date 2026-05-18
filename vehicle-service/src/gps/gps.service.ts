import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GpsPosition } from './entity/gps-position.entity';
import { Vehicle } from '../vehicles/entity/vehicle.entity';
import { RecordGpsInput } from './dto/record-gps.input';

@Injectable()
export class GpsService {
  constructor(
    @InjectRepository(GpsPosition)
    private gpsRepository: Repository<GpsPosition>,
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async record(input: RecordGpsInput): Promise<GpsPosition> {
    const vehicle = await this.vehicleRepository.findOne({ where: { id: input.vehicleId } });
    if (!vehicle) throw new NotFoundException('Vehicle not found');

    const position = this.gpsRepository.create({
      vehicleId: input.vehicleId,
      latitude: input.latitude,
      longitude: input.longitude,
    });
    return this.gpsRepository.save(position);
  }

  async getHistory(vehicleId: string): Promise<GpsPosition[]> {
    const vehicle = await this.vehicleRepository.findOne({ where: { id: vehicleId } });
    if (!vehicle) throw new NotFoundException('Vehicle not found');

    return this.gpsRepository.find({
      where: { vehicleId },
      order: { recordedAt: 'DESC' },
    });
  }
}