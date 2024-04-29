export interface ICar {
  drive(): void;
}

export class Car implements ICar {
  drive(): void {
    console.log('Driving.');
  }
}

// protection proxy
export class CarProxy implements ICar {
  private driver: Person;
  private ageLimit = 18;
  private car: Car;

  constructor(person: Person, car: Car) {
    this.driver = person;
    this.car = car;
  }

  drive(): void {
    if (this.driver.getAge() < this.ageLimit) {
      console.log('Driver is too young to drive.');
      return;
    }

    this.car.drive();
  }
}

export class Person {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }

  getAge(): number {
    return this.age;
  }
}

const car = new Car();
const driver1 = new Person(15);
const driver2 = new Person(20);

const carProxy1 = new CarProxy(driver1, car);
carProxy1.drive();

const carProxy2 = new CarProxy(driver2, car);
carProxy2.drive();
