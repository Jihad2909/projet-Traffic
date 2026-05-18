import { registerEnumType } from '@nestjs/graphql';

export enum VehicleStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  MAINTENANCE = 'MAINTENANCE',
}

registerEnumType(VehicleStatus, { name: 'VehicleStatus' });