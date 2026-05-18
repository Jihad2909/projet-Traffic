import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NotificationsService } from './notifications.service';
import { Notification } from './entities/notification.entity';
import { CreateNotificationInput } from './dto/create-notification.input';
import { UpdateNotificationInput } from './dto/update-notification.input';

@Resolver(() => Notification)
export class NotificationsResolver {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Mutation(() => Notification)
  createNotification(@Args('input') input: CreateNotificationInput): Notification {
    return this.notificationsService.create(input);
  }

  @Query(() => [Notification], { name: 'notifications' })
  findAll() {
    return this.notificationsService.findAll();
  }

  @Query(() => Notification, { name: 'notification' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.notificationsService.findOne(id);
  }

  @Mutation(() => Notification)
  updateNotification(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateNotificationInput,
  ) {
    return this.notificationsService.update(id, input);
  }

  @Mutation(() => Notification)
  removeNotification(@Args('id', { type: () => Int }) id: number) {
    return this.notificationsService.remove(id);
  }

  @Mutation(() => Notification)
  markNotificationAsRead(@Args('id', { type: () => Int }) id: number) {
    return this.notificationsService.markAsRead(id);
  }
}