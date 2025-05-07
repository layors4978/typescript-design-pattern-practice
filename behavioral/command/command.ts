class BankAccount {
  constructor(private balance: number) {}

  public deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
  }

  public withdraw(amount: number): boolean {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}, New Balance: ${this.balance}`);
      return true;
    } else {
      console.log(`Insufficient funds. Current Balance: ${this.balance}`);
      return false;
    }
  }

  public getBalance(): number {
    return this.balance;
  }
}

interface ICommand {
  call(): void;
  undo(): void;
}

enum BankAccountActionEnum {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}

class BankAccountCommand implements ICommand {
  constructor(
    private account: BankAccount,
    private action: BankAccountActionEnum,
    private amount: number,
    private success: boolean = false
  ) {}

  public call() {
    switch (this.action) {
      case BankAccountActionEnum.DEPOSIT:
        this.account.deposit(this.amount);
        this.success = true;
        break;
      case BankAccountActionEnum.WITHDRAW:
        this.success = this.account.withdraw(this.amount);
        break;
    }
  }

  public undo() {
    if (!this.success) return;
    switch (this.action) {
      case BankAccountActionEnum.DEPOSIT:
        this.account.withdraw(this.amount);
        break;
      case BankAccountActionEnum.WITHDRAW:
        this.account.deposit(this.amount);
        break;
    }
  }
}

const myAccount = new BankAccount(100);
const depositCommand = new BankAccountCommand(
  myAccount,
  BankAccountActionEnum.DEPOSIT,
  100
);
const withdrawCommand = new BankAccountCommand(
  myAccount,
  BankAccountActionEnum.WITHDRAW,
  50
);

console.log(myAccount.getBalance());

const commandHistory: ICommand[] = [];

depositCommand.call();
commandHistory.push(depositCommand);

withdrawCommand.call();
commandHistory.push(withdrawCommand);

console.log(myAccount.getBalance());

commandHistory.pop()?.undo();
commandHistory.pop()?.undo();

console.log(myAccount.getBalance());
