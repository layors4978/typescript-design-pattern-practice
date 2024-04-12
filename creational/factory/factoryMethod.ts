export interface FruitJuice {
  color: string;
}

export class AppleJuice implements FruitJuice {
  public color = 'red';
}

export class OrangeJuice implements FruitJuice {
  public color = 'orange';
}

export interface FruitJuiceFactory {
  makeJuice(): FruitJuice;
}

export class AppleJuiceFactory implements FruitJuiceFactory {
  makeJuice(): FruitJuice {
    return new AppleJuice();
  }
}

export class OrangeJuiceFactory implements FruitJuiceFactory {
  makeJuice(): FruitJuice {
    console.log('The scent is good.');
    return new OrangeJuice();
  }
}

const appleJuice = new AppleJuiceFactory().makeJuice();
const orangeJuice = new OrangeJuiceFactory().makeJuice();

console.log(appleJuice.color);
console.log(orangeJuice.color);
