import { Injectable } from '@nestjs/common';
import { Client } from 'intercom-client';

@Injectable()
export class AppService {
  client = new Client({ token: process.env.INTERCOM_TOKEN });

  postEvent(): void {
    this.client.events
      .create({
        event_name: 'Test event',
        created_at: Math.floor(new Date().getTime() / 1000), // Unix timestamp
        user_id: '248',
        metadata: { type: 'foo', content: 'Something important' },
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.error(err));
  }

  sendMessage(): void {
    this.client.messages.create({
      message_type: 'email',
      template: 'plain',
      subject: 'Testing intercom sdk integration',
      body: '<h1>Hello world</h1>',
      from: {
        type: 'admin',
        id: '163',
      },
      to: {
        type: 'user',
        id: '248',
      },
    });
  }
}
