export interface IBlackTea {
  content: string[];
  cost: number;

  getContent(): string[];
  getCost(): number;
}

export class BlackTea implements IBlackTea {
  public content = ['blackTea'];
  public cost = 35;

  getContent(): string[] {
    return this.content;
  }

  getCost(): number {
    return this.cost;
  }
}

export abstract class BlackTeaDecorator implements IBlackTea {
  public blackTea: IBlackTea;
  public abstract content: string[];
  public abstract cost: number;

  constructor(blackTea: IBlackTea) {
    this.blackTea = blackTea;
  }

  getContent(): string[] {
    return this.blackTea.getContent();
  }

  getCost(): number {
    return this.blackTea.getCost();
  }
}

// decorator1
export class MilkDecorator extends BlackTeaDecorator {
  public content = ['milk'];
  public cost = 10;

  getContent(): string[] {
    return [...super.getContent(), ...this.content];
  }

  getCost(): number {
    return super.getCost() + this.cost;
  }
}

// decorator2
export class PearlDecorator extends BlackTeaDecorator {
  public content = ['pearl'];
  public cost = 5;

  getContent(): string[] {
    return [...super.getContent(), ...this.content];
  }

  getCost(): number {
    return super.getCost() + this.cost;
  }
}

const blackTea = new BlackTea();
console.log(blackTea.getContent());
console.log(blackTea.getCost());

const milkTea = new MilkDecorator(blackTea);
console.log(milkTea.getContent());
console.log(milkTea.getCost());

const pearlMilkTea = new PearlDecorator(milkTea);
console.log(pearlMilkTea.getContent());
console.log(pearlMilkTea.getCost());
