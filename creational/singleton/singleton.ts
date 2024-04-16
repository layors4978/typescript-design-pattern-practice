export class Singleton {
  private static instance: Singleton;

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return this.instance;
  }
}

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(a === b);
