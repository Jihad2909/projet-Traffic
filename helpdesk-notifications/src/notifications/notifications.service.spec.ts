import { NotificationsService } from './notifications.service';

describe('NotificationsService (simple)', () => {
  let service: NotificationsService;

  beforeEach(() => {
    service = new NotificationsService();
  });

  it('create notification', () => {
    const result = service.create({
      title: 'Test',
      message: 'Hello',
      type: 'SYSTEM',
      recipient: 'test@mail.com',
    });

    console.log(result); // pour voir résultat
    expect(result.title).toBe('Test');
  });

  it('list notifications', () => {
    service.create({
      title: 'A',
      message: 'B',
      type: 'SYSTEM',
      recipient: 'test@mail.com',
    });

    const result = service.findAll();

    console.log(result); // pour debug
    expect(result.length).toBeGreaterThan(0);
  });
});