import { cloneDeep } from 'lodash';

export interface Prototype<T> {
  clone(): T;
}

export class Person implements Prototype<Person> {
  public name: string;
  public address: Address;

  constructor(name: string, address: Address) {
    this.name = name;
    this.address = address;
  }

  // structuredClone() will discard functions and prototype of class
  // if you just want the value of object, then use structuredClone()
  clone(): Person {
    // let clone = structuredClone(this);

    let clone = cloneDeep(this);
    return clone;
  }
}

export class Address {
  public city: string;
  public postcode: string;

  constructor(city: string, postcode: string) {
    this.city = city;
    this.postcode = postcode;
  }
}

const john = new Person('john', new Address('New Taipei City', '235'));
const jane = john.clone();

console.log(john);
console.log(jane);

jane.name = 'jane';
jane.address.postcode = '236';

console.log(john);
console.log(jane);
