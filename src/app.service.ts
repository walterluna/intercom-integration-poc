import { Injectable } from '@nestjs/common';
import { Client } from 'intercom-client';

@Injectable()
export class AppService {
  client = new Client({ token: process.env.INTERCOM_TOKEN });

  postEvent(): void {
    this.client.events
      .create({
        event_name: 'Foo',
        created_at: new Date().getTime(),
        user_id: 'bar',
        metadata: { type: 'baz' },
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.error(err));
  }

  sendMessage(): void {
    this.client.messages.create({
      message_type: 'email',
      subject: 'This is the subject',
      from: {
        type: 'admin',
        id: 'admin-id',
      },
      to: {
        type: 'user',
        id: 'receiver-id',
      },
    });
  }
}
