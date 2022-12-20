import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { InMemoryNotificationRepository } from '@test/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel Notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();

    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      category: 'Test',
      content: new Content('Cancel notification test'),
      recipientId: 'cancel-notification-test-id',
    });

    await notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'non-existing-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
