import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { VehicleStatus } from '../../common/enums/vehicle-status.enum';
import { GpsPosition } from '../../gps/entity/gps-position.entity';

@ObjectType()
@Entity()
export class Vehicle {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ unique: true })
  immatriculation: string;

  @Field()
  @Column()
  model: string;

  @Field(() => VehicleStatus)
  @Column({ type: 'enum', enum: VehicleStatus, default: VehicleStatus.ACTIVE })
  status: VehicleStatus;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => GpsPosition, (gps) => gps.vehicle)
  positions: GpsPosition[];
}