// flyweight
export class Jewel {
  public name: string;
  public price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

export const jewelMap = new Map<string, Jewel>();
jewelMap.set('ruby', new Jewel('ruby', 50));
jewelMap.set('emerald', new Jewel('emerald', 70));
jewelMap.set('ember', new Jewel('ember', 80));
jewelMap.set('pearl', new Jewel('pearl', 40));
jewelMap.set('diamond', new Jewel('diamond', 100));

// flyweight factory
export class JewelFactory {
  private static jewelMap: Map<string, Jewel> = jewelMap;

  static getJewel(jewelName: string): Jewel {
    return this.jewelMap.get(jewelName);
  }
}

const jewelList = ['ruby', 'emerald', 'ember', 'pearl', 'diamond'];
const bag: Jewel[] = [];

for (let i = 0; i < 50; i++) {
  const jewelName = jewelList[Math.floor(Math.random() * jewelList.length)];
  bag.push(JewelFactory.getJewel(jewelName));
}
console.log(bag);
console.log(bag[0] === JewelFactory.getJewel(bag[0].name));
