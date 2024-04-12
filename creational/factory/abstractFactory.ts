export interface FruitJuice {
  name: string;
}

export class AppleJuice implements FruitJuice {
  public name = 'apple juice';
}

export class OrangeJuice implements FruitJuice {
  public name = 'orange juice';
}

export interface Cup {
  material: string;
}

export class GlassCup implements Cup {
  public material = 'glass';
}

export class PlasticCup implements Cup {
  public material = 'plastic';
}

export abstract class DrinkFactory {
  protected description = `A ${this.getCup().material} cup of ${
    this.getJuice().name
  }`;
  abstract getJuice(): FruitJuice;
  abstract getCup(): Cup;
  abstract makeDrink(): string;
}

export class AppleJuiceInGlassCupFactory extends DrinkFactory {
  getJuice(): FruitJuice {
    return new AppleJuice();
  }
  getCup(): Cup {
    return new GlassCup();
  }
  makeDrink(): string {
    return `${this.description}, taste good.`;
  }
}

export class OrangeJuiceInGlassCupFactory extends DrinkFactory {
  getJuice(): FruitJuice {
    return new OrangeJuice();
  }
  getCup(): Cup {
    return new GlassCup();
  }

  makeDrink(): string {
    return `${this.description}, it's sweet.`;
  }
}

export class OrangeJuiceInPlasticCupFactory extends DrinkFactory {
  getJuice(): FruitJuice {
    return new OrangeJuice();
  }
  getCup(): Cup {
    return new PlasticCup();
  }

  makeDrink(): string {
    return `${this.description}, it's cheap.`;
  }
}

console.log(new AppleJuiceInGlassCupFactory().makeDrink());
console.log(new OrangeJuiceInGlassCupFactory().makeDrink());
console.log(new OrangeJuiceInPlasticCupFactory().makeDrink());
