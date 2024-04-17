export abstract class Job {
  protected weapon: Weapon;
  protected armor: Armor;

  constructor(weapon: Weapon, armor: Armor) {
    this.weapon = weapon;
    this.armor = armor;
  }

  abstract useWeapon(): void;

  getArmorWeight(): string {
    return this.armor.weight;
  }
}

export interface Weapon {
  attack(): void;
}

export interface Armor {
  weight: string;
}

export class Sword implements Weapon {
  attack(): void {
    console.log('slash');
  }
}

export class Dagger implements Weapon {
  attack(): void {
    console.log('stab');
  }
}

export class IronArmor implements Armor {
  readonly weight = 'heavy';
}

export class LightArmor implements Armor {
  readonly weight = 'light';
}

export class Warrior extends Job {
  useWeapon(): void {
    console.log('warcry');
    this.weapon.attack();
  }
}

export class Assassin extends Job {
  useWeapon(): void {
    console.log('stealth');
    this.weapon.attack();
  }
}

const sword = new Sword();
const dagger = new Dagger();
const ironArmor = new IronArmor();
const lightArmor = new LightArmor();

const warrior = new Warrior(sword, ironArmor);
const assassin = new Assassin(dagger, lightArmor);

warrior.useWeapon();
assassin.useWeapon();
