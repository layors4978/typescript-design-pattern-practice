export class DrinkMakerFacade {
  private milkProvider: MilkProvider;
  private blackTeaProvider: BlackTeaProvider;
  private shaker: Shaker;
  private cupProvider: CupProvider;

  constructor() {
    this.milkProvider = new MilkProvider();
    this.blackTeaProvider = new BlackTeaProvider();
    this.shaker = new Shaker();
    this.cupProvider = new CupProvider();
  }

  makeMilk() {
    this.milkProvider.getMilk();
    this.cupProvider.getCup();
  }

  makeBlackTea() {
    this.blackTeaProvider.getBlackTea();
    this.cupProvider.getCup();
  }

  makeMilkTea() {
    this.milkProvider.getMilk();
    this.blackTeaProvider.getBlackTea();
    this.shaker.shakeDrink();
    this.cupProvider.getCup();
  }
}

export class MilkProvider {
  getMilk() {}
}
export class BlackTeaProvider {
  getBlackTea() {}
}

export class Shaker {
  shakeDrink() {}
}

export class CupProvider {
  getCup() {}
}
