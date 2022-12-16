import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a new notification', () => {
    const notification = new Notification({
      category: 'Test',
      content: new Content('Add Notification test!'),
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
