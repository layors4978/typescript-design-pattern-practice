export interface IWolf {
  Howl(): void;
}

export interface IDog {
  bark(): void;
}

export class Wolf implements IWolf {
  Howl(): void {
    console.log('awooo');
  }
}

export class Dog implements IDog {
  bark(): void {
    console.log('woof');
  }
}

// object adapter
// have instance in adapter
export class DogAdapter implements Dog {
  private wolf: Wolf;

  constructor(wolf: Wolf) {
    this.wolf = wolf;
  }

  bark(): void {
    this.wolf.Howl();
  }
}

// class adapter
// multiple inheritance
export class WolfAdapter extends Dog implements Wolf {
  Howl(): void {
    this.bark();
  }
}

const direWolf = new Wolf();
const chihuahua = new Dog();
const camouflagedWolf = new DogAdapter(direWolf);
const disguisedDog = new WolfAdapter();

direWolf.Howl();
chihuahua.bark();
camouflagedWolf.bark();
disguisedDog.Howl();
