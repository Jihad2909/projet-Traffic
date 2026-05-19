import { Injectable, NotFoundException } from '@nestjs/common';
import { Notification, NotificationType } from './entities/notification.entity';
import { CreateNotificationInput } from './dto/create-notification.input';
import { UpdateNotificationInput } from './dto/update-notification.input';

@Injectable()
export class NotificationsService {

  private notifications: Notification[] = [];
  private idCounter = 1;

 
  // 1. ENVOYER NOTIFICATION

  create(input: CreateNotificationInput): Notification {

    const notification: Notification = {
  id: this.idCounter++,
  title: input.title,
  message: input.message,
  type: input.type,
  recipient: input.recipient,
  isRead: false,
  createdAt: new Date(),
};

    this.notifications.push(notification);
    return notification;
  }

 
  // 2. CONSULTER TOUTES

  findAll(): Notification[] {
    return this.notifications;
  }

  // 3. TROUVER PAR ID

  findOne(id: number): Notification {
    const notification = this.notifications.find(n => n.id === id);

    if (!notification) {
      throw new NotFoundException(`Notification with ID ${id} not found`);
    }

    return notification;
  }

 
  // 4. MARQUER COMME LUE
  markAsRead(id: number): Notification {
    const notification = this.findOne(id);

    notification.isRead = true;

    return notification;
  }

  
  // 5. UPDATE 
 
  update(id: number, input: UpdateNotificationInput): Notification {
    const notification = this.findOne(id);

    Object.assign(notification, input);

    return notification;
  }

  
  // 6. SUPPRIMER 
  
  remove(id: number): Notification {
    const notification = this.findOne(id);

    this.notifications = this.notifications.filter(n => n.id !== id);

    return notification;
  }
}