import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';

export enum NotificationType {
  SYSTEM = 'SYSTEM',
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

registerEnumType(NotificationType, {
  name: 'NotificationType',
  description: 'Type de notification',
});

@ObjectType()
export class Notification {

  @Field(() => Int)
  id!: number;

  @Field()
  title!: string;

  @Field()
  message!: string;

  @Field(() => NotificationType)
  type!: NotificationType;

  @Field()
  recipient!: string;

  @Field()
  isRead!: boolean;

  @Field(() => Date)
  createdAt!: Date;
}