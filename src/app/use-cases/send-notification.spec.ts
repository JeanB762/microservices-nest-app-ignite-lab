import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    await sendNotification.execute({
      category: 'Test',
      content: 'Send notification test',
      recipientId: 'send-notification-test-id',
    });

    expect(notifications).toHaveLength(1);
  });
});
