import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      category: 'Test',
      content: 'Send notification test',
      recipientId: 'send-notification-test-id',
    });

    expect(notification).toBeTruthy();
  });
});
