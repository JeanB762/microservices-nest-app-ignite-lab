import { InMemoryNotificationRepository } from '@test/in-memory-notifications-repository';
import { makeNotification } from '@test/notification-factory';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();

    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-id-1',
    });

    expect(count).toEqual(2);
  });
});
