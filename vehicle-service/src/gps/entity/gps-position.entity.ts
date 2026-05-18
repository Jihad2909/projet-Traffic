import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Vehicle } from '../../vehicles/entity/vehicle.entity';

@ObjectType()
@Entity()
export class GpsPosition {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('float')
  latitude: number;

  @Field()
  @Column('float')
  longitude: number;

  @Field()
  @CreateDateColumn()
  recordedAt: Date;

  @Field(() => Vehicle)
  @ManyToOne(() => Vehicle, (vehicle) => vehicle.positions)
  vehicle: Vehicle;

  @Column()
  vehicleId: string;
}