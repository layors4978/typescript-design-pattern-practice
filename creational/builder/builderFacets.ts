export class Person {
  public address: string = '';
  public postcode: string = '';
  public city: string = '';
  public companyName: string = '';
  public position: string = '';
  public annualIncome: number = 0;

  public toString() {
    return (
      `Person lives at ${this.address}, ${this.city}, ${this.postcode} ` +
      `and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`
    );
  }
}

export class PersonBuilder {
  protected person: Person;
  constructor(person = new Person()) {
    this.person = person;
  }

  get lives() {
    return new PersonAddressBulider(this.person);
  }

  get works() {
    return new PersonJobBulider(this.person);
  }

  public build(): Person {
    return this.person;
  }
}

export class PersonAddressBulider extends PersonBuilder {
  constructor(person: Person) {
    super(person);
  }

  public at(address: string): PersonAddressBulider {
    this.person.address = address;
    return this;
  }

  public withPostcode(postcode: string): PersonAddressBulider {
    this.person.postcode = postcode;
    return this;
  }

  public in(city: string): PersonAddressBulider {
    this.person.city = city;
    return this;
  }
}

export class PersonJobBulider extends PersonBuilder {
  constructor(person: Person) {
    super(person);
  }

  public at(companyName: string): PersonJobBulider {
    this.person.companyName = companyName;
    return this;
  }

  public asA(position: string): PersonJobBulider {
    this.person.position = position;
    return this;
  }
  public earning(annualIncome: number): PersonJobBulider {
    this.person.annualIncome = annualIncome;
    return this;
  }
}

const pb = new PersonBuilder();
const person = pb.lives
  .at('King Road')
  .in('Taipei')
  .withPostcode('235')
  .works.at('KingCorp')
  .asA('manager')
  .earning(80000)
  .build();

console.log(person.toString());
// Person lives at King Road, Taipei, 235 and works at KingCorp as a manager earning 80000
