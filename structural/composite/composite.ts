// component
export abstract class MenuComponent {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  abstract print(): void;
}

// composite
export class Menu extends MenuComponent {
  private menuList: MenuComponent[] = [];

  add(item: MenuComponent): void {
    const duplicateMenuItem = this.menuList.filter((menuItem) => {
      return menuItem.getName() === item.getName();
    });
    if (duplicateMenuItem.length === 0) {
      this.menuList.push(item);
    } else {
      console.log('This item is already added to this menu.');
    }
  }

  remove(item: MenuComponent): void {
    let menuItemIndex = -1;
    this.menuList.map((menuItem, index) => {
      if (menuItem.getName() === item.getName()) {
        menuItemIndex = index;
      }
    });

    if (menuItemIndex !== -1) {
      this.menuList.splice(menuItemIndex, 1);
    } else {
      console.log('This item is not in this menu.');
    }
  }

  print(): void {
    console.log(`${this.getName()}:`);
    this.menuList.forEach((item) => {
      item.print();
    });
  }
}

// leaf
export class MenuItem extends MenuComponent {
  print(): void {
    console.log(this.getName());
  }
}

const menu = new Menu('Menu');

const breakfastMenu = new Menu('Breakfast');
breakfastMenu.add(new MenuItem('Sandwich'));
breakfastMenu.add(new MenuItem('Burger'));
breakfastMenu.add(new MenuItem('Bread'));
breakfastMenu.add(new MenuItem('Bread'));

const dinnerMenu = new Menu('Dinner');
dinnerMenu.add(new MenuItem('Pasta'));
dinnerMenu.add(new MenuItem('Pizza'));
dinnerMenu.add(new MenuItem('Steak'));
dinnerMenu.remove(new MenuItem('Steak'));

const dessertMenu = new Menu('Dessert');
dessertMenu.add(new MenuItem('pancake'));
dessertMenu.add(new MenuItem('salad'));
dessertMenu.add(new MenuItem('ice cream'));
dessertMenu.remove(new MenuItem('cream'));

menu.add(breakfastMenu);
menu.add(dinnerMenu);
menu.add(dessertMenu);

menu.print();
