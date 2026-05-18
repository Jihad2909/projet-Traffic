import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateZoneInput } from './create-zone.input';

@InputType()
export class UpdateZoneInput extends PartialType(CreateZoneInput) {}