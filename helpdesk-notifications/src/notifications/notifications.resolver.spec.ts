import { Test } from '@nestjs/testing';
import { NotificationsResolver } from './notifications.resolver';
import { NotificationsService } from './notifications.service';

describe('NotificationsResolver', () => {
  let resolver: NotificationsResolver;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        NotificationsResolver,
        NotificationsService, // 👈 IMPORTANT
      ],
    }).compile();

    resolver = module.get<NotificationsResolver>(NotificationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});