export interface FruitJuice {
  color: string;
}

export class AppleJuice implements FruitJuice {
  public color = 'red';
}

export class OrangeJuice implements FruitJuice {
  public color = 'orange';
}

export enum FruitEnum {
  APPLE = 'apple',
  ORANGE = 'orange',
}

export class FruitJuiceFactory {
  static makeJuice(fruit: FruitEnum): FruitJuice {
    switch (fruit) {
      case FruitEnum.APPLE:
        return new AppleJuice();
      case FruitEnum.ORANGE:
        return new OrangeJuice();
    }
  }
}

const appleJuice = FruitJuiceFactory.makeJuice(FruitEnum.APPLE);
const orangeJuice = FruitJuiceFactory.makeJuice(FruitEnum.ORANGE);

console.log(appleJuice.color);
console.log(orangeJuice.color);
