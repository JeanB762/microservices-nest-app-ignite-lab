import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'Test',
    content: new Content('Count recipient notifications test 2'),
    recipientId: 'count-notifications-test-id-1',
    ...override,
  });
}
