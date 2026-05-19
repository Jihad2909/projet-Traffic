import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateNotificationInput } from './create-notification.input';
import { NotificationType } from '../entities/notification.entity';

@InputType()
export class UpdateNotificationInput extends PartialType(CreateNotificationInput) {

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  message?: string;

  @Field(() => NotificationType, { nullable: true })
  type?: NotificationType;

  @Field({ nullable: true })
  recipient?: string;

  @Field({ nullable: true })
  isRead?: boolean;
}