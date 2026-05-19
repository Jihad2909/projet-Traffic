import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entity/vehicle.entity';
import { CreateVehicleInput } from './dto/create-vehicle.input';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async create(input: CreateVehicleInput): Promise<Vehicle> {
    const vehicle = this.vehicleRepository.create(input);
    return this.vehicleRepository.save(vehicle);
  }

  async findAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  async findOne(id: string): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.findOne({ where: { id } });
    if (!vehicle) throw new NotFoundException('Vehicle not found');
    return vehicle;
  }

  async findByImmatriculation(immatriculation: string): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.findOne({ where: { immatriculation } });
    if (!vehicle) throw new NotFoundException('Vehicle not found');
    return vehicle;
  }
}