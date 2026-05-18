import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, MinLength, IsEnum, IsOptional } from 'class-validator';
import { Role } from '../../common/constants/roles.enum';

@InputType()
export class RegisterInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(6)
  password: string;

  @Field(() => Role, { nullable: true })
  @IsEnum(Role)
  @IsOptional()
  role?: Role;
}