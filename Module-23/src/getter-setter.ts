//access modifier 3 type --> public, private , protected
class BkashAccount {
  private _phone: string;
  private _balance: number;
  private _pin: number;
  private _paymentHistory: any = [];

  constructor(phone: string, balance: number, pin: number) {
    this._phone = phone;
    this._balance = balance;
    this._pin = pin;
  }

  getBalance(pin: number) {
    if (pin !== this.pin) {
      return "Incorrect PIN";
    }

    return this._balance;
  }

  // use setter for new pin set
  set pin(newPin: number) {
    if (typeof newPin !== "number") {
      throw new Error("Enter a valid PIN ");
    }
    this._pin = newPin;
  }

  // if we want to show pin / set item ? we can call get method
  /* get pin(){
   return this._pin
  } */

}

const bkashAcc = new BkashAccount("+8801793075097", 495, 1278);
const balance = bkashAcc.getBalance(1278);
bkashAcc.pin = 1289
console.log(bkashAcc);
