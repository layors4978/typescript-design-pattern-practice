export class MailHandler {
  private nextHandler: MailHandler;

  // fluent interface
  addNext(handler: MailHandler): MailHandler {
    if (!this.nextHandler) {
      this.nextHandler = handler;
      return this.nextHandler;
    } else {
      return this.nextHandler.addNext(handler);
    }
  }

  handle(mail: Mail): void {
    if (this.nextHandler) {
      this.nextHandler.handle(mail);
    }
  }
}

export class SpamMailHandler extends MailHandler {
  handle(mail: Mail): void {
    if (mail.type === MailType.SPAM) {
      console.log('Spam mail detected, discard it.');
      return;
    }
    super.handle(mail);
  }
}

export class AdvertisementMailHandler extends MailHandler {
  handle(mail: Mail): void {
    if (mail.type === MailType.ADVERTISEMENT) {
      console.log('Advertisement mail detected, discard it.');
      return;
    }
    super.handle(mail);
  }
}

export class AllMailHandler extends MailHandler {
  handle(mail: Mail): void {
    console.log(`You got mail. type:${mail.type}`);
    super.handle(mail);
  }
}

export class Mail {
  type: MailType;

  constructor(type: MailType) {
    this.type = type;
  }
}

export enum MailType {
  SPAM = 'spam',
  ADVERTISEMENT = 'advertisement',
  NORMAL = 'normal',
  IMPORTANT = 'important',
}

const spamMail = new Mail(MailType.SPAM);
const advertisementMail = new Mail(MailType.ADVERTISEMENT);
const normalMail = new Mail(MailType.NORMAL);
const importantMail = new Mail(MailType.IMPORTANT);

const mailHandler = new SpamMailHandler();
mailHandler
  .addNext(new AdvertisementMailHandler())
  .addNext(new AllMailHandler());

mailHandler.handle(spamMail);
mailHandler.handle(advertisementMail);
mailHandler.handle(normalMail);
mailHandler.handle(importantMail);
